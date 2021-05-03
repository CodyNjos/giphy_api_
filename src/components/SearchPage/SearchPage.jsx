import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';
import SearchRate  from "../SearchRate/SearchRate"
import './SearchPage.css'
function SearchPage() {
    const dispatch = useDispatch();
    const store = useSelector(store => store);
    const [search, setSearch] = useState("")
    const [searched, setSearched] = useState(false)
    const [displayMessage, setDisplayMessage] = useState("Search For Some Gifs")



    const dispatchSearch = () => {
        setSearched(!searched)
        setTimeout(updateDisplayMessage, 4 * 1000)
        dispatch({ type: "FETCH_SEARCH", payload: { data: search } })
    }

    const updateDisplayMessage = () => {
        if (store.search.data.length === 0) {
            setDisplayMessage("No Results")
            return;
        } if (store.search.data.length != 0) {
            setDisplayMessage("Search For Some Gifs")
            return;
        }
    }

    // used for mat ui pagination
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;
    const [noOfPages, setNoOfPages] = useState(Math.ceil(store.search.data.length / itemsPerPage))
    const [rating, setRating] = useState(0)

    useEffect(() => {
        dispatch({ type: "CLEAR_SEARCH" })
    }, []);

    useEffect(() => {
        setNoOfPages(Math.ceil(store.search.data.length / itemsPerPage));
    }, [store.search]);

    const handleChange = (event, value) => {
        setPage(value);
    }
    

    return (
        <>
            <h1>search</h1>
            <TextField
                label="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="outlined" onClick={dispatchSearch}>Search</Button>
            <div className="gifContainer">
                {store.search.data.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((gif) => {
                    return (
                        <div key={gif.id} className="gifCard">
                            <img className="gif" src={gif.images.fixed_width.url} />
                           
                            <SearchRate  gif = {gif}/>
                        </div>
                    )
                })}
                
            </div>
            {noOfPages > 0 &&
                <div className="pagWrap">
                    <Pagination
                        className="pagination"
                        count={noOfPages}
                        shape="rounded"
                        variant="outlined"
                        onChange={handleChange}
                        defaultPage={1}
                        showFirstButton
                        showLastButton />
                </div>        
                }
                {noOfPages === 0 && <p> {displayMessage} </p>}
        </>

    )
}

export default SearchPage