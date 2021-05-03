import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import userSaga from './user.saga';

function* fetchRated(action) {
    try {
        let response = yield axios.get(`/api/gif/rated/${action.payload.id}`)
        yield put({ type: 'SET_RATED', payload: response.data })
    } catch (error) {
        console.log(`Error getting new gif`, error);
    };
};
function* fetchByRating(action) {
    try {
        let response = yield axios.get(`/api/gif/ratedByRating/${action.payload.id}/${action.payload.rating}`)
        yield put({ type: 'SET_RATED', payload: response.data })
    } catch (error) {
        console.log(`Error getting new gif`, error);
    };
}
function* addRated(action) {
    try {
       yield axios.post(`/api/gif/rate`, action.payload)
    } catch (error) {
        console.log(`Error adding rating`, error);
    };
}
function* updateRated(action) {
    try {
        yield axios.put(`/api/gif/updateRating`, action.payload)
        yield put({type : "FETCH_RATED", payload : {id : action.payload.userId }})
     } catch (error) {
         console.log(`Error adding rating`, error);
     };
}
function* deleteRated(action) {
    try {
        yield axios.delete(`/api/gif/delete/${action.payload.id}`)
        yield put({type : "FETCH_RATED", payload : {id : action.payload.userId }})
     } catch (error) {
         console.log(`Error adding rating`, error);
     };
}
function* ratedSaga() {
    yield takeLatest('FETCH_RATED', fetchRated);
    yield takeLatest('FETCH_RATED_BY_RATING', fetchByRating)
    yield takeLatest('ADD_RATED', addRated)
    yield takeLatest('UPDATE_RATED', updateRated)
    yield takeLatest('DELETE_RATED', deleteRated )

}

export default ratedSaga