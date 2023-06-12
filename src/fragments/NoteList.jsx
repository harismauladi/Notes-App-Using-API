import React from "react";
import PropTypes from "prop-types";
import Card from "../elements/Card";
import IsLoading from "../elements/IsLoading";

function NoteList({ note, loading }) {
  if (loading) {
    return <IsLoading />;
  }
  return (
    <>
      {note.length !== 0 ? (
        <div className="notes-list">
          {note.map((notes) => (
            <Card
              key={notes.id}
              id={notes.id}
              title={notes.title}
              time={notes.createdAt}
              body={notes.body}
            />
          ))}
        </div>
      ) : (
        <div className="notes-list-empty">
          <p>No Data Available</p>
        </div>
      )}
    </>
  );
}

NoteList.propTypes = {
  note: PropTypes.array.isRequired,
};

export default NoteList;
