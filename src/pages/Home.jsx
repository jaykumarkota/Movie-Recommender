import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import MovieCard from "../components/MovieCard.jsx";
import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../services/api.js";
import { faL } from "@fortawesome/free-solid-svg-icons/faL";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Error has occured!");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  // const movies = [{
  //   title: "F1 the movie",
  //   id: 1,
  //   releaseYear: 2025
  // }, {
  //   title: "wednesday",
  //   id: 2,
  //   releaseYear: 2025
  // }, {
  //   title: "marvel",
  //   releaseYear: 2025,
  //   id: 4,
  // }, {
  //   title: "superman",
  //   releaseYear: 2025,
  //   id: 5,
  // }, {
  //   title: "venom",
  //   releaseYear: 2025,
  //   id: 6,
  // }, {
  //   title: "F1 the movie",
  //   releaseYear: 2025,
  //   id: 7,
  // }, {
  //   title: "F1 the movie",
  //   releaseYear: 2025,
  //   id: 8,
  // }, {
  //   title: "F1 the movie",
  //   releaseYear: 2025,
  //   id: 9,
  // },
  // ]
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim())
      return
    if (loading)
      return
    setLoading(true);

    try {
      const getSearchMovies = await searchMovies(searchQuery);
      setMovies(getSearchMovies);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Cannot load search movies!.")
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="Home container">
      <div className="hero-msg">
        <h3>Search your Favorite Movies Here!</h3>
      </div>
      <form className="input-form" onSubmit={handleSearch}>
        {/* handleSearch() - means calling the function
        handleSearch - taking a reference of the function */}
        <input
          type="text"
          className="movie-input"
          placeholder="Search Movies"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
        </button>
      </form>
      <div className="popular-msg">
        <h3>Popular Movies</h3>
      </div>

      {error ? (
        <div className="error-msg">{error}</div>
      ) : loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid section">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
