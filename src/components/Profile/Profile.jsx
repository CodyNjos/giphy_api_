import { useState } from 'react'
import { TextField, Button, ButtonGroup, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { useEffect } from 'react'
import Pagination from '@material-ui/lab/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import ProfileRate from "../ProfileRate/ProfileRate"
import './Profile.css'

function Profile() {

    const user = useSelector((store) => store.user);
    const store = useSelector((store) => store)
    const rated = useSelector((store) => store.rated)
    const [filterText, setFilterText] = useState("All Rated Gifs")
    const [open, setOpen] = useState(false);
    const [gifToDelete, setGifToDelete] = useState({})
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_RATED', payload: { id: user.id } });
    }, []);

     // used for material ui pagination
     const [page, setPage] = useState(1);
     const itemsPerPage = 10;
     const [noOfPages, setNoOfPages] = useState(Math.ceil(store.search.data.length / itemsPerPage))
     useEffect(() => {
         setNoOfPages(Math.ceil(rated.length / itemsPerPage));
     }, [rated]);
     const handleChange = (value) => {
        setPage(value);
    }
     //

    const updateFilter = (rating) => {
        setFilterText(`Gifs Rated ${rating}`)
        dispatch({ type: 'FETCH_RATED_BY_RATING', payload: { rating: rating, id: user.id } })
    }
    const resetFilter = () => {
        setFilterText("All Rated Gifs")
        dispatch({ type: 'FETCH_RATED', payload: { id: user.id } });
    }
    const handleOpen = (gif) => {
        setGifToDelete(gif)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const deleteGif = () => {
        const id = gifToDelete.id
        dispatch({ type: "DELETE_RATED", payload: { id: id, userId: user.id } })
        setOpen(false)
    }

    return (
        <>

            <h1> {user.username}'s Profile</h1>
            <h2>Filter By Rating</h2>
            <ButtonGroup variant="text" style={{ color: "black" }}>
                <Button className='inputButton' onClick={() => updateFilter(1)}>One</Button>
                <Button className='inputButton' onClick={() => updateFilter(2)}>Two</Button>
                <Button className='inputButton' onClick={() => updateFilter(3)}>Three</Button>
                <Button className='inputButton' onClick={() => updateFilter(4)}>Four</Button>
                <Button className='inputButton' onClick={() => updateFilter(5)}>Five</Button>
                {filterText != "All Rated Gifs" &&
                    <Button className='inputButton' onClick={() => resetFilter()}>All</Button>
                }
            </ButtonGroup>
            {rated[0] ? <h2>{filterText}</h2> : <> <h2>{filterText}</h2> <h2>No Gifs Found</h2></>}
            <div className="gifContainer">
                {rated[0] &&
                    rated.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((gif) => {
                        return (
                            <div key={gif.id} className="gifCard">
                                <img className="gif" src={gif.url} />
                                <p>Rating:{gif.rating}</p>
                                <ProfileRate gif={gif} /> <br />
                                <Button onClick={() => handleOpen(gif)}>Delete</Button>
                            </div>
                        )
                    })}
            </div>
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
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle >{`Are you sure you want to remove this gif?`}</DialogTitle>
                <DialogContent >
                    <p className={"dialogText"}>
                        <img src={gifToDelete.url} /> <br />
                        It will no longer appear in you rated gifs.
                    </p>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} variant="contained">
                        Cancel
                    </Button>
                    <Button onClick={() => deleteGif()} variant="contained" color="secondary">
                        Remove
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
export default Profile