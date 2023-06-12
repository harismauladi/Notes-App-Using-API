import React from "react";
import { showFormattedDate } from "../utils";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Card({ title, time, body, id }) {
  return (
    <div className="note-item">
      <h2 className="note-item__title">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h2>
      <p className="note-item__createdAt">{showFormattedDate(time)}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
