import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

function ProfileRate ({gif}) {
    const store = useSelector(store => store);
    const dispatch = useDispatch()
    const [rating, setRating] = useState("")
   
    const rateGif = (e) => {
        setRating(e)
        const id= gif.id
        dispatch({type: "UPDATE_RATED", payload: {id: id, rating: e, userId: store.user.id}})
        
    }
    

    return (
        <>
        <FormControl style={{ width: '90%' }}>
            <InputLabel id="rating">Update Rating</InputLabel>
            <Select
            
            labelId="rating"
            value={rating}
            onChange={(e) => rateGif(e.target.value)}
            >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
            </Select>
        </FormControl>
        </>
    )
}

export default ProfileRate 