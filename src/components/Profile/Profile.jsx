import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ProfileRateRadio from "../ProfileRateRadio/ProfileRateRadio"
import './Profile.css'

function Profile() {

    const user = useSelector((store) => store.user);
    const rated = useSelector((store) => store.rated)
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_RATED', payload: { id: user.id} });
  }, []);

    return(
        <>
        <h1> {user.username}'s profile</h1>
        <div className="gifContainer">
        {rated[0] &&
        rated.map((gif) => {
            return(
            
                <div key={gif.id} className="gifCard">
                <img src={gif.url}/>
                <p>Rating:{gif.rating}</p>
                <ProfileRateRadio gif={gif}/>
                </div>
                
            
            )
        })}
        </div>
        </>
    )
}
export default Profile