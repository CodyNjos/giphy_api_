import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button } from "@material-ui/core";
import './SearchPage.css'
function SearchPage() {
    const dispatch = useDispatch();
    const store = useSelector(store => store);
    const [search, setSearch] = useState("")
    // useEffect(() => {
    //  console.log('search page')
    //  if(search != ""){
    //     dispatch({type: "FETCH_SEARCH", payload: {data: search}})
    //     }
    // }, [search]);

   const dispatchSearch = () => {
    dispatch({type: "FETCH_SEARCH", payload: {data: search}})
   }
    
    
    return(
        <>
        <h1>search</h1>
        <TextField
        label = "search"
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        />
        <Button variant="outlined" onClick={dispatchSearch}>Search</Button>
       <div className="gifContainer">
       {store.search.data.map((gif)=>{
           return(
            <div key={gif.id} className="gifCard">
                <img src={gif.images.fixed_width.url}/>
            </div>
           )
}) }

        </div>
        </>
        
    )
}

export default SearchPage