import React from 'react';
import "./InputContainer.css";

const InputContainer = (props) => {
    return (
        <form className="inputContainer" onSubmit={props.handleSubmit}>
            <input type="text" value={props.inputText} placeholder="Input..."
                   onChange={(e) => props.setInputText(e.target.value)}
            />
            <button>Search</button>
        </form>
    );
};

export default InputContainer;