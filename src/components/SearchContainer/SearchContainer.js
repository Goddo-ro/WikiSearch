import React, {useState} from 'react';
import "./SearchContainer.css";
import InputContainer from "../InputContainer/InputContainer";
import ItemsGrid from "../ItemsGrid/ItemsGrid";

const SearchContainer = () => {
    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState(["Goggle", "Mail", "Ruru", "ASDsaf"]);
    const [links, setLinks] = useState(["dsafsd", "SKfjks", "fsaf", "1sdfasd"]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hi");
    }

    return (
        <div className="search-container">
            <h1>WikiSearch</h1>
            <p>Search</p>
            <InputContainer handleSubmit={handleSubmit} inputText={inputText} setInputText={setInputText}/>
            <ItemsGrid items={items} links={links} />
        </div>
    );
};

export default SearchContainer;