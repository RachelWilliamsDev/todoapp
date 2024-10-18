import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
function Note({ title, content, id, deleteNote }) {
  function handleClick() {
    deleteNote(id);
  }
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
