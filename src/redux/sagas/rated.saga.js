import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import userSaga from './user.saga';

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
function* updateRated(action) {
    console.log("IN UPDATE")
    try {
        axios.put(`/api/gif/updateRating`, action.payload)
        yield put({type : "FETCH_RATED", payload : {id : action.payload.userId }})
     } catch (error) {
         console.log(`Error adding rating`, error);
     };
}
function* ratedSaga() {
    yield takeLatest('FETCH_RATED', fetchRated);
    yield takeLatest('ADD_RATED', addRated)
    yield takeLatest('UPDATE_RATED', updateRated)

}

export default ratedSaga