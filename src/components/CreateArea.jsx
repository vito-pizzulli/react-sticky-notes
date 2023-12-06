import React from "react";

function CreateArea() {
    return (
        <div className="create-area-container">
            <form className="create-area-form">
                <div className="inputs">
                    <input type="text" name="note-name" id="note-description" placeholder="Insert title" />
                    <textarea name="note-description" id="note-description" placeholder="Insert description"></textarea>
                </div>
                <div className="buttons">
                    <button>Add</button>
                    <button>Clear fields</button>
                </div>
            </form>
        </div>
    );
}

export default CreateArea;