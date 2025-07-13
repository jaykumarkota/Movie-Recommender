import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import MovieCard from "../components/MovieCard.jsx";
import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../services/api.js";
import { faL } from "@fortawesome/free-solid-svg-icons/faL";
import { useLocation } from "react-router-dom";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const location = useLocation();


  // useEffect(() => {
  //   if (!hasSearched) {
  //     setSearchQuery("");
  //     setHasSearched(false);
  //     setLoading(true);
  //     getPopularMovies()
  //       .then((popularMovies) => {
  //         setMovies(popularMovies);
  //         setError(null);
  //       })
  //       .catch(() => setError("Error has occurred!"))
  //       .finally(() => setLoading(false));
  //   }
  // }, [hasSearched]);
  // useEffect(() => {
  //   if (searchQuery.trim() === "") {
  //     setHasSearched(false)
  //   }
  // }, [searchQuery]);


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

    if (!searchQuery.trim() || loading)
      return
    setLoading(true);
    setHasSearched(true);

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
  // useEffect(() => {
  //   if (searchQuery.trim() === "")
  //     setHasSearched(false);

  // }, [searchQuery]);

  // if (error) {
  //   return <div className="error-msg">{error}</div>;
  // }

  // if (loading) {
  //   return <div className="loading">Loading...</div>;
  // }


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
      <div className="popular-msg section">
        <h3>{hasSearched && searchQuery.trim()
          ? "Your Search Results"
          : "Popular Movies"}
        </h3>
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
