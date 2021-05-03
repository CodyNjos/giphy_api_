import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';
import SearchRate from "../SearchRate/SearchRate"
import './SearchPage.css'
function SearchPage() {
    const dispatch = useDispatch();
    const store = useSelector(store => store);
    const [search, setSearch] = useState("")
    const [searched, setSearched] = useState(false)

    const dispatchSearch = () => {
        setSearched(!searched)
        dispatch({ type: "FETCH_SEARCH", payload: { data: search } })
    }

    // used for material ui pagination
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;
    const [noOfPages, setNoOfPages] = useState(Math.ceil(store.search.data.length / itemsPerPage))
    useEffect(() => {
        setNoOfPages(Math.ceil(store.search.data.length / itemsPerPage));
    }, [store.search]);
    //

    useEffect(() => {
        dispatch({ type: "CLEAR_SEARCH" })
    }, []);



    const handleChange = (value) => {
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
                            <img className="gif" src={gif.images.fixed_width.url} /><br />
                            <SearchRate gif={gif} />
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
            {noOfPages === 0 &&
                <>
                    {store.search.data.length === 0 && !store.search.meta &&
                        <p> Search For Some Gifs! </p>}
                    {store.search.data.length === 0 && store.search.meta &&
                        <p>No Results. Try Another Search!</p>}
                </>
            }
        </>

    )
}

export default SearchPage