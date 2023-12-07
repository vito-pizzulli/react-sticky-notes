import React, { useState } from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault()
    }

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