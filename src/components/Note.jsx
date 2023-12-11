import React from "react";

function Note(props) {

    // Function to handle a click event and delete a note, invoking the 'onDelete' prop function from the parent component with the current 'id' as a parameter.
    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <div className="note">
            <div className="infos">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
            <button onClick={handleClick}><i class="fa-solid fa-trash-can"></i></button>
        </div>
    );
}

export default Note;