import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';
function NavBar() {
  // const data = useContext(MovieContext);
  return (
    <div className="navbar container">
      <span className="navbar__logo">Guruvu Garu</span>
      <nav>
        <ul className="navbar__menu">
          <li><Link to='/' className="navbar__links" href="#home">Home</Link></li>
          <li><Link to='/favorites' className="navbar__links" href="#favorites">Favorites</Link></li>
          <li><a className="navbar__links" href="#Settings">Settings</a></li>
          <li className="navbar__line"></li>
          <li><button className='navbar__sun'><FontAwesomeIcon icon={faLightbulb} />
          </button></li>
        </ul>
        <button className="navbar__ham"><FontAwesomeIcon icon={faBars} /></button>
      </nav>
    </div>
  );
}
export default NavBar;