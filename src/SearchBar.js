// src/SearchBar.js
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
  // Modify the API request URL to include the query parameter
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=7f1bd126f8101023cb7e575a6c236d63&query=${searchTerm}`;
  
  onSearch(apiUrl);
};


  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
