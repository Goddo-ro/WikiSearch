import React from 'react';
import "./ItemsGrid.css";

const ItemsGrid = ({items, links}) => {
    return (
        <div className="items-grid">
            {
                items.map((item, index) => <a key={index} className="item btn" href={links[index]}>{item}</a>)
            }
        </div>
    );
};

export default ItemsGrid;