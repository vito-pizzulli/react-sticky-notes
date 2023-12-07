import React from "react";

function Note(props) {

    // Function to handle a click event and delete a note, invoking the 'onDelete' prop function from the parent component with the current 'id' as a parameter.
    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <div className="note">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <button onClick={handleClick}>Delete</button>
        </div>
    );
}

export default Note;