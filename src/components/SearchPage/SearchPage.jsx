import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
function SearchPage() {
    const dispatch = useDispatch();
    const reduxStore = useSelector(store => store);

    useEffect(() => {
        dispatch({ type: 'FETCH_SEARCH', payload: "asdf" });
    }, []);
    return(
        <>
        <h1>search</h1>
        </>
    )
}

export default SearchPage