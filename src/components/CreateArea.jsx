import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import React, { useState } from "react";

function CreateArea({ onAddNote }) {
  // State to manage form expansion
  const [isExpanded, setExpanded] = useState(false);

  // State to manage note data (title and content)
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  // Handles input changes for both title and content fields
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  // Submits the note and resets the form
  function submitNote(event) {
    event.preventDefault();
    onAddNote(note);
    setNote({
      title: "",
      content: "",
    });
  }

  // Expands the form to show the title input field
  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />
        )}

        <textarea
          name="content"
          rows={isExpanded ? 3 : 1}
          onClick={expand}
          placeholder="Take a note..."
          value={note.content}
          onChange={handleChange}
        />
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
