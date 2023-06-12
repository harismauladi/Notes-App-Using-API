import React from "react";
import { Link } from "react-router-dom";

function ActionButton() {
  return (
    <Link to={"/notes/new"} className="homepage__action action">
      +
    </Link>
  );
}

export default ActionButton;
