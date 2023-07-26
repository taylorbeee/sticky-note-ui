import React from "react";
import Note from "./Note";

const NotesList = (props) => {
  const filteredNotes = props.notes.filter((note) => note.doesMatchSearch);

  const renderNote = (note) => (
    <Note
      removeNote={props.removeNote}
      onType={props.onType}
      key={note.id}
      note={note}
    />
  );
  const noteElements = filteredNotes.map(renderNote);

  return <ul className="notes-list">{noteElements}</ul>;
};

export default NotesList;
