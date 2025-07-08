import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function MovieCard({ movie }) {

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1ASrhV.img?w=768&h=960&m=6&x=333&y=266&s=58&d=58" alt="movie-poster" />
        <div className="movie-overlay">
          <button className="like-btn"><FontAwesomeIcon className='heart-icon' icon={faHeart} /></button>
        </div>
      </div>
      <div className="movie-details">
        <span className='movie-title'>{movie.title}</span>
        <span className='movie-year'>{movie.releaseYear}</span>
      </div>
    </div>
  );
}
export default MovieCard;