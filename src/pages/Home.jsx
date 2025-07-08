import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import MovieCard from '../components/MovieCard.jsx'
import { useEffect, useState } from 'react'
import { getPopularMovies } from '../services/api.js';

function Home() {

  const [searchQuery, setSearchQuery] = useState("");

  const movies = [{
    title: "F1 the movie",
    id: 1,
    releaseYear: 2025
  }, {
    title: "wednesday",
    id: 2,
    releaseYear: 2025
  }, {
    title: "marvel",
    releaseYear: 2025,
    id: 4,
  }, {
    title: "superman",
    releaseYear: 2025,
    id: 5,
  }, {
    title: "venom",
    releaseYear: 2025,
    id: 6,
  }, {
    title: "F1 the movie",
    releaseYear: 2025,
    id: 7,
  }, {
    title: "F1 the movie",
    releaseYear: 2025,
    id: 8,
  }, {
    title: "F1 the movie",
    releaseYear: 2025,
    id: 9,
  },
  ]
  function handleSearch(e) {
    e.preventDefault();
    alert(searchQuery)
  }

  return (
    <div className="Home container">
      <div className="hero-msg">
        <h3>Search your Favorite Movies Here!</h3>
      </div>
      <form className="input-form" onSubmit={handleSearch}>
        {/* handleSearch() - means calling the function
        handleSearch - taking a reference of the function */}
        <input type="text" className="movie-input" placeholder='Search Movies' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <button type="submit" className="search-btn"><FontAwesomeIcon className='search-icon' icon={faSearch} /></button>
      </form>
      <div className="popular-msg">
        <h3>Popular Movies</h3>
      </div>
      <div className="movies-grid section">

        {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        {/* {movies.map((movie) => movie.title.toLowerCase().startsWith(searchQuery) ? <MovieCard key={movie.id} movie={movie} /> : "")} */}
      </div>
    </div>
  );
}
export default Home;