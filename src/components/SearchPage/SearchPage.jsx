import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField } from "@material-ui/core"
function SearchPage() {
    const dispatch = useDispatch();
    const store = useSelector(store => store);
    const [search, setSearch] = useState("")
    useEffect(() => {
     console.log('search page')
     if(search != ""){
        dispatch({type: "FETCH_SEARCH", payload: {data: search}})
        }
    }, [search]);
    
    const changeSearch = (e) => {
        console.log(e)
        if(e != ""){
        setSearch(e)
        }
        else{
            dispatch({type:"CLEAR_SEARCH"})
            setSearch("")
        }
    }
   
    
    
    return(
        <>
        <h1>search</h1>
        <TextField
        label = "search"
        value={search}
        onChange={(e)=> changeSearch(e.target.value)}
        />
       <div>
        
       {store.search.data.map((gif)=>{
           return(
            <div key={gif.id}>
                <img src={gif.images.fixed_width.url}/>
            </div>
           )
       }) }
        </div>
        </>
        
    )
}

export default SearchPage