import React from 'react';
import "./ItemsGrid.css";
import {observer} from "mobx-react-lite";
import WikiStore from "../../store/WikiStore";

const ItemsGrid = observer(() => {
    return (
        <div className="items-grid">
            {
                WikiStore.items.map((item, index) => <a key={index} className="item btn" href={WikiStore.links[index]}>{item}</a>)
            }
        </div>
    );
});

export default ItemsGrid;