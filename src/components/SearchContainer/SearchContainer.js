import React, {useEffect, useState} from 'react';
import "./SearchContainer.css";
import InputContainer from "../InputContainer/InputContainer";
import ItemsGrid from "../ItemsGrid/ItemsGrid";
import {useFetching} from "../../hooks/useFetching";
import $api from "../../api/api";
import axios from "axios";
import Loader from "../Loader/Loader";

const SearchContainer = () => {
    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);
    const [links, setLinks] = useState([]);

    const [fetchItems, isLoading] = useFetching(async () => {
        const res = await $api.get("",
            {
                params: {
                    origin: "*",
                    action: "opensearch",
                    search: inputText,
                }
            });
        const data = res.data;
        setItems(data[1]);
        setLinks(data[3]);
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText) {
            fetchItems();
        }
    }

    return (
        <div className="search-container">
            <h1>WikiSearch</h1>
            <p>Search</p>
            <InputContainer handleSubmit={handleSubmit} inputText={inputText} setInputText={setInputText}/>
            {
                isLoading
                ? <Loader/>
                : <ItemsGrid items={items} links={links} />
            }
        </div>
    );
};

export default SearchContainer;