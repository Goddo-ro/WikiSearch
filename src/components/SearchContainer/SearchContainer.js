import React, {useState} from 'react';
import "./SearchContainer.css";
import InputContainer from "../InputContainer/InputContainer";
import ItemsGrid from "../ItemsGrid/ItemsGrid";
import {useFetching} from "../../hooks/useFetching";
import $api from "../../api/api";
import Loader from "../Loader/Loader";
import {observer} from "mobx-react-lite";
import WikiStore from "../../store/WikiStore";

const SearchContainer = observer(() => {
    const [inputText, setInputText] = useState("");

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
        WikiStore.setItems(data[1]);
        WikiStore.setLinks(data[3]);
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
                : <ItemsGrid/>
            }
        </div>
    );
});

export default SearchContainer;