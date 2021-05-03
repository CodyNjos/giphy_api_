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
function* addRated(action) {
    console.log("in add Rate")
    try {
       axios.post(`/api/gif/rate`, action.payload)
    } catch (error) {
        console.log(`Error adding rating`, error);
    };
}
function* ratedSaga() {
    yield takeLatest('FETCH_RATED', fetchRated);
    yield takeLatest('ADD_RATED', addRated)

}

export default ratedSaga