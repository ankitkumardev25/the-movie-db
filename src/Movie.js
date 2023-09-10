// src/Movie.js
import React from "react";

const Movie = ({ movie }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState(null);

  const handleDetailsClick = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=YOUR_API_KEY`
      );
      setDetails(response.data);
      setShowDetails(true);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  return (
    <div className="movie">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <button onClick={handleDetailsClick}>View Details</button>

      {showDetails && details && (
        <div className="movie-details">
          <h3>Details</h3>
          <p>Release Date: {details.release_date}</p>
          <p>Rating: {details.vote_average}</p>
          {/* Add more detailed information here */}
        </div>
      )}
    </div>
  );
};


export default Movie;
