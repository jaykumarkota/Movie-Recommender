import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMobile } from '@fortawesome/free-solid-svg-icons'

function MovieCard({ movie }) {

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="movie-overlay">
          <button className="like-btn"><FontAwesomeIcon className='heart-icon' icon={faHeart} /></button>
        </div>
      </div>
      <div className="movie-details">
        <span className='movie-title'>{movie.title}</span>
        <span className='movie-year'>{movie.release_date?.split("-")[0]}</span>
      </div>
    </div>
  );
}
export default MovieCard;