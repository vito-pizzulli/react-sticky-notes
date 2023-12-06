import React from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import NotesArea from "./NotesArea";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CreateArea />
        <NotesArea />
      </main>
    </div>
  );
}

export default App;