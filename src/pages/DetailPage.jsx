import React from "react";
import { getNote } from "../utils/network-data";
import { showFormattedDate } from "../utils";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import DeleteButton from "../elements/DeleteButton";
import ArchiveButton from "../elements/ArchiveButton";
import PropTypes from "prop-types";
import IsLoading from "../elements/IsLoading";

const DetailPageContainer = () => {
  const { id } = useParams();

  return <DetailPage id={id} />;
};

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: true,
    };
  }

  async componentDidMount() {
    const { eror, data } = await getNote(this.props.id);
    if (!eror) {
      this.setState(() => {
        return {
          data: data,
          loading: false,
        };
      });
    }
  }

  render() {
    if (this.state.data === null || this.props.id === null) {
      return <NotFound />;
    }

    if (this.state.loading) {
      return <IsLoading />;
    }

    return (
      <>
        <div className="detail-page">
          <div className="detail-page__title">{this.state.data?.title}</div>
          <div className="detail-page__createdAt">
            {showFormattedDate(this.state.data?.createdAt)}
          </div>
          <div className="detail-page__body">{this.state.data?.body}</div>
        </div>
        <div className="detail-page__action">
          <DeleteButton id={this.state.data} />
          <ArchiveButton id={this.state.data} />
        </div>
      </>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailPageContainer;
