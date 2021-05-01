import "./Nav.css"
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';

function Nav() {
    
    return(
        <div className="nav">
        <Link to="/">
        <h2 className="nav-title">Giphy API</h2>
      </Link>
         <Link className="navLink" to="/Search">
            Search
        </Link>
        <LogOutButton className="navLink" />
        </div>
    )
}

export default Nav