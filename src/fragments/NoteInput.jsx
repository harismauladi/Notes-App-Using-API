import React from "react";
import PropTypes from "prop-types";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTitleChange = (e) => {
    this.setState(() => {
      return {
        title: e.target.value,
      };
    });
  };

  onBodyChange = (e) => {
    this.setState(() => {
      return {
        body: e.target.value,
      };
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state);
  };
  render() {
    return (
      <>
        <div className="add-new-page__input">
          <input
            type="text"
            className="add-new-page__input__title"
            placeholder="Insert Title"
            required
            onChange={this.onTitleChange}
            value={this.state.title}
          />
          <textarea
            type="text"
            className="add-new-page__input__body"
            placeholder="Insert Description"
            required
            onChange={this.onBodyChange}
            value={this.state.body}
          ></textarea>
        </div>
        <div className="add-new-page__action">
          <button type="button" className="action" onClick={this.onSubmit}>
            ✅︎
          </button>
        </div>
      </>
    );
  }
}

NoteInput.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default NoteInput;
