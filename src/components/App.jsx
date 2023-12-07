import React, { useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import NotesArea from "./NotesArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

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