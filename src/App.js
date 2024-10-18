import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import uuid package
import "./App.css";
import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);

  // Function to add a new note with a unique id
  function addNote(newNote) {
    setNotes((prevNotes) => [
      ...prevNotes,
      { ...newNote, id: uuidv4() }, // Assigning a unique id to each note
    ]);
  }

  // Function to delete a note based on its unique id
  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAddNote={addNote} />
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
