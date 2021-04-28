import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button } from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';
import './SearchPage.css'
function SearchPage() {
    const dispatch = useDispatch();
    const store = useSelector(store => store);
    const [search, setSearch] = useState("")

    

    const dispatchSearch = () => {
        dispatch({ type: "FETCH_SEARCH", payload: { data: search } })
    }

    // used for mat ui pagination
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;
    const [noOfPages, setNoOfPages] = useState(Math.ceil(store.search.data.length / itemsPerPage))
    
    useEffect(() => {
        console.log('search page')
        setNoOfPages(Math.ceil(store.search.data.length / itemsPerPage));
    }, [store.search.data]);

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
                            <img src={gif.images.fixed_width.url} />
                        </div>
                    )
                })}
                <Pagination
                    style={{ margin: "auto" }}
                    className="pagination"
                    count={noOfPages}
                    shape="rounded"
                    variant="outlined"
                    onChange={handleChange}
                    defaultPage={1}
                    showFirstButton
                    showLastButton />
            </div>
        </>

    )
}

export default SearchPage