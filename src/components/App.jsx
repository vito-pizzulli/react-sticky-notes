import React, { useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import NotesArea from "./NotesArea";

function App() {

  // Declaration of the notes array using the state management hook.
  // Keeps track of the notes inserted by the user and is initialized with an empty array.
  const [notes, setNotes] = useState([]);

  // Function to add a new note to the 'notes' array using the state management hook.
  // It creates a new array that includes the existing notes along with the new one.
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  // Function to delete a note from the 'notes' array using the state management hook.
  // It creates a new array that includes the existing notes except the one whose index matches the id passed as a parameter.
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteElement, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <main>
        <CreateArea onAdd={addNote} />
        <NotesArea 
          notes={notes}
          onDelete={deleteNote}
        />
      </main>
    </div>
  );
}

export default App;