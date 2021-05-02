import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchRated(action) {
    console.log('rated gifs for', action.payload.id)
    try {
        let response = yield axios.get(`/api/gif/rated/${action.payload.id}`)
        yield put({ type: 'SET_RATED', payload: response.data })
    } catch (error) {
        console.log(`Error getting new gif`, error);
    };
};

function* ratedSaga() {
    yield takeLatest('FETCH_RATED', fetchRated);

}

export default ratedSaga