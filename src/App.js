// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import Header from "./Header";
import SearchBar from "./SearchBar";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const handleSearch = (query) => {
    setQuery(query);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=7f1bd126f8101023cb7e575a6c236d63&query=${query}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (query) {
      fetchMovies();
    }
  }, [query]);

  return (
    <div className="App">
      <Header/>
      <h1>what would you like to watch?</h1>
       <SearchBar onSearch={handleSearch} />
      <div className="movies">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};


export default App;
