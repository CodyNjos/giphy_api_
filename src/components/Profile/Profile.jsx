import { useState } from 'react'  
import { TextField, Button, ButtonGroup } from '@material-ui/core';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ProfileRate  from "../ProfileRate/ProfileRate"
import './Profile.css'

function Profile() {

    const user = useSelector((store) => store.user);
    const rated = useSelector((store) => store.rated)
    const [filterText, setFilterText] = useState("All Rated Gifs")
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_RATED', payload: { id: user.id} });
  }, []);

  const updateFilter = (rating) => {
      setFilterText(`Gifs Rated ${rating}`)
      dispatch({type:'FETCH_RATED_BY_RATING', payload: {rating: rating, id: user.id } })
  }
    return(
        <>
       
        <h1> {user.username}'s profile</h1>
        <h2>Filter By Rating</h2>
        <ButtonGroup variant="text" color="primary">
            <Button className='inputButton' onClick ={()=> updateFilter(1) }>One</Button>
            <Button className='inputButton' onClick ={()=> updateFilter(2) }>Two</Button>
            <Button className='inputButton' onClick ={()=> updateFilter(3) }>Three</Button>
            <Button className='inputButton' onClick ={()=> updateFilter(4) }>Four</Button>
            <Button className='inputButton' onClick ={()=> updateFilter(5) }>Five</Button>
        </ButtonGroup>
        {rated[0] ? <h2>{filterText}</h2> : <h2>No Gifs Found</h2>}
        <div className="gifContainer">
        {rated[0] &&
        rated.map((gif) => {
            return(
                <div key={gif.id} className="gifCard">
                <img src={gif.url}/>
                <p>Rating:{gif.rating}</p>
                <ProfileRate  gif={gif}/>
                </div>
            )
        })}
        </div>
        </>
    )
}
export default Profile