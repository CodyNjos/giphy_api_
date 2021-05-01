import "./Nav.css"
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from "react-redux";

function Nav() {
    const user = useSelector((store) => store.user);

    let loginLinkData = {
      path: '/login',
      text: 'Login / Register',
    };
  
    if (user.id != null) {
      loginLinkData.path = '/user';
      loginLinkData.text = 'My Profile';
    }
  
    
    return(
        <div className="nav">
        <Link to="/">
        <h2 className="nav-title">Giphy API</h2>
      </Link>
      <div>
      <Link className="navLink" to={loginLinkData.path}>
              {loginLinkData.text}
            </Link>
         <Link className="navLink" to="/Search">
            Search
        </Link>
        <LogOutButton className="navLink" />
        </div>
        </div>
    )
}

export default Nav