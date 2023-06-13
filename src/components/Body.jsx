import React from "react";
import PropTypes from "prop-types";
import NoteList from "../fragments/NoteList";
import Searchbar from "../fragments/Searchbar";
import ActionButton from "../fragments/ActionButton";

function Body({ note, type, onSearchInput, loading, local }) {
  return (
    <main>
      <Searchbar
        isArchived={type}
        onSearchInput={onSearchInput}
        local={local}
      />
      <NoteList note={note} loading={loading} />
      {type === "archive" ? null : <ActionButton />}
    </main>
  );
}

Body.propTypes = {
  note: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  onSearchInput: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  local: PropTypes.string.isRequired,
};
export default Body;
