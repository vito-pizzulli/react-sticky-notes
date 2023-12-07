import React, { useState } from "react";

function CreateArea(props) {

    // Declaration of the note object using the state management hook.
    // Keeps track of input field elements ('title' and 'content') and is initialized with empty fields.
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    // Function to handle changes in input fields and update the 'note' object using the state management hook.
    // Extracts the 'name' and 'value' from the event target, and utilizes the 'setNote' function to create a new object that includes the updated field along with the other one.
    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    // Function to submit a note, invoking the 'onAdd' prop function to add the current 'note' object to the parent component's state.
    // Resets the 'note' object with empty fields after submission and prevents the default form submission behavior.
    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault()
    }

    // Function that resets the 'note' object with empty fields and prevents the default form submission behavior.
    function clearFields(event) {
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault()
    }

    return (
        <div className="create-area-container">
            <form className="create-area-form">
                <div className="inputs">
                    <input
                        type="text"
                        name="title"
                        onChange={handleChange}
                        value={note.title}
                        placeholder="Title"
                    />
                    <textarea
                        name="content"
                        onChange={handleChange}
                        value={note.content}
                        placeholder="Write your note..."
                    />
                </div>
                <div className="buttons">
                    <button onClick={submitNote}>Add</button>
                    <button onClick={clearFields}>Clear fields</button>
                </div>
            </form>
        </div>
    );
}

export default CreateArea;