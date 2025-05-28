import React from "react";

const Filter = ({ categogries, selectedCategory, setSelectedCategory}) => {
    return (
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}
        style={{marginBottom: "20px", padding: "10px", width: "100%"}} >
            <option value="">All Categories</option>
            {categogries.map((category) => (<option   key={category}
                value={category}>
               {category}
            </option>))}
        </select>
    );
};
export default Filter;