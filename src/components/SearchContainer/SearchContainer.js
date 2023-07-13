import React, {useEffect, useState} from 'react';
import "./SearchContainer.css";
import InputContainer from "../InputContainer/InputContainer";
import ItemsGrid from "../ItemsGrid/ItemsGrid";
import {useFetching} from "../../hooks/useFetching";
import $api from "../../api/api";

const SearchContainer = () => {
    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState(["Goggle", "Mail", "Ruru", "ASDsaf"]);
    const [links, setLinks] = useState(["dsafsd", "SKfjks", "fsaf", "1sdfasd"]);

    const [fetchItems, isLoading] = useFetching(async () => {
        const response = await $api.get("?action=opensearch&format=json&search=" + inputText);
        setItems(response[1]);
        setLinks(response[3]);
    })

    useEffect(() => {
        fetchItems();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
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