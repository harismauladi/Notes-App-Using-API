import React from "react";
import NoteInput from "../fragments/NoteInput";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/network-data";

function AddNotes() {
  const navigate = useNavigate();

  const onAdd = async (note) => {
    await addNote(note);
    navigate("/");
  };

  return (
    <>
      <section className="add-new-page__input">
        <NoteInput onAdd={onAdd} />
      </section>
    </>
  );
}

export default AddNotes;
