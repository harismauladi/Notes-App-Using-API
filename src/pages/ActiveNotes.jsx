import React from "react";
import Body from "../components/Body";
import { getActiveNotes } from "../utils/network-data";
import PropTypes from "prop-types";

class ActiveNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      search: "",
      loading: true,
    };
    this.onSearchInput = this.onSearchInput.bind(this);
  }
  onSearchInput = (keyword) => {
    this.setState(() => {
      return {
        search: keyword.target.value,
      };
    });
  };

  async componentDidMount() {
    const { eror, data } = await getActiveNotes();

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
    return (
      <Body
        note={this.state.data.filter((note) =>
          note.title.toLowerCase().includes(this.state.search.toLowerCase())
        )}
        type="active"
        onSearchInput={this.onSearchInput}
        loading={this.state.loading}
        local={this.props.local}
      />
    );
  }
}
ActiveNotes.propTypes = {
  local: PropTypes.string.isRequired,
};

export default ActiveNotes;
