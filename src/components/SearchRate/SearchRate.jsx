import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

function SearchRate ({gif}) {
    const store = useSelector(store => store);
    const dispatch = useDispatch()
    const [rating, setRating] = useState("")
   
    const rateGif = (e) => {
        setRating(e)
        const id =store.user.id
        const url =gif.images.fixed_width.url
        dispatch({ type:"ADD_RATED", payload:{ url : url, id : id, rating: e }})

    }

    return (
        <>
        {rating === "" ?
        <FormControl style={{ width: '90%'}}>
            <InputLabel id="rating">Add Rating</InputLabel>
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
 :
 <p>Rating : {rating} </p>}
        </>
    )
}

export default SearchRate 