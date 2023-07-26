import React from "react";

const Note = (props) => {
  console.log(props);

  const clickDelete = () => props.removeNote(props.note.id);

  const updateTitle = (e) => {
    const updatedValue = e.target.value;
    const editMeId = props.note.id;
    props.onType(editMeId, "title", updatedValue);
  };
  const updateDescription = (e) => {
    const updatedValue = e.target.value;
    const editMeId = props.note.id;
    props.onType(editMeId, "description", updatedValue);
  };

  return (
    <li className="note">
      <input
        onChange={updateTitle}
        value={props.note.title}
        className="note__title"
        type="text"
        placeholder="Title"
      />
      <textarea
        onChange={updateDescription}
        value={props.note.description}
        className="note__description"
        placeholder="Description..."
      />
      <span className="note__delete" onClick={clickDelete}>
        X
      </span>
    </li>
  );
};

export default Note;
