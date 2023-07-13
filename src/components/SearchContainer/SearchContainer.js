import React, {useState} from 'react';
import "./SearchContainer.css";
import InputContainer from "../InputContainer/InputContainer";

const SearchContainer = () => {
    const [inputText, setInputText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hi");
    }

    return (
        <div className="search-container">
            <h1>WikiSearch</h1>
            <p>Search</p>
            <InputContainer handleSubmit={handleSubmit} inputText={inputText} setInputText={setInputText}/>
        </div>
    );
};

export default SearchContainer;