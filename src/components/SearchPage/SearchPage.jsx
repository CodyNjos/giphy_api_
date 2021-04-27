import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField } from "@material-ui/core"
function SearchPage() {
    const dispatch = useDispatch();
    const reduxStore = useSelector(store => store);
    const [search, setSearch] = useState("")
    useEffect(() => {
     console.log('search page')
    }, []);

   
    useEffect(() => {
        if(search != ""){
        dispatch({type: "FETCH_SEARCH", payload: search})
        }
    }, [search]);
    
    return(
        <>
        <h1>search</h1>
        <TextField
        label = "search"
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        />
        </>
    )
}

export default SearchPage