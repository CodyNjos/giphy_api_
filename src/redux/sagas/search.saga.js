import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchGiphySearch(action) {
    try {
        let response = yield axios.get(`/api/gif/search/${action.payload.data}`)
        yield put({ type: 'SET_SEARCH', payload: response.data })
    } catch (error) {
        console.log(`Error getting new gif`, error);
    };
};

function* searchSaga() {
    yield takeLatest('FETCH_SEARCH', fetchGiphySearch);

}

export default searchSaga