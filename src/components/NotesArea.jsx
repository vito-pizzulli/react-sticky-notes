import React from "react";
import Note from "./Note";

function NotesArea(props) {
    return (
        <div className="notes-area-container">
            {props.notes.map((noteElement, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={noteElement.title}
                        content={noteElement.content}
                        onDelete={props.onDelete}
                    />
                );
            })}
        </div>
    );
}

export default NotesArea;