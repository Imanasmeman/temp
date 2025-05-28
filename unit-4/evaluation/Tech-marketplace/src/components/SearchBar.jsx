import React from "react";

const SearchBar = ({
    searchQuery, setSearchQuery 
}) => {
    return (
        <input type="text" placeholder="Search products..." value={searchQuery} onChange = {(e) => setSearchQuery(e.target.value)}
        style={{marginBottom: "20px", padding: "10px", width: "100%"}} />
    );
};
export default SearchBar