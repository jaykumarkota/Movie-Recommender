import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();
  // const favorites = [];
  // [] empty array is always a truthy value so we use favorites.length > 0 -> if length = 0 then it is a falsy value

  if (favorites.length > 0) {
    return (<div className="movies-grid section">
      {favorites.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>);
  }

  return (
    <div className="fav-page">
      <p className="no-fav-msg"><strong>Oops! </strong><br />you don't have any favorite movies yet!</p>
    </div>
  );
}
export default Favorites;