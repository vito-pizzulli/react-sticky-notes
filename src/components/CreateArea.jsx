import React, { useState } from "react";

function CreateArea(props) {

    // Declaration of the note object using the state management hook.
    // Keeps track of input field elements ('title' and 'content') and is initialized with empty fields.
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    // Declaration of the error boolean using the state management hook.
    // Keeps track of the visibility of the error field and is initialized as false.
    const [errorVisible, setErrorVisible] = useState(false);

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
    // If one of the fields is empty, it sets the 'errorVisible' boolean to true, showing it. If the submission is successful, the 'errorVisible' is set to false.
    function submitNote(event) {
        if (note.title.trim() !== "" && note.content.trim() !== "") {
            setErrorVisible(false);
            props.onAdd(note);
            setNote({
                title: "",
                content: ""
            });
        } else {
            setErrorVisible(true);
        }
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
            {errorVisible && <h2 className="error-message">Please populate both fields.</h2>}
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