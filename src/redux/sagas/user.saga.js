import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchUser() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/user', config);
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* registerUser(action) {
  try {
    yield axios.post('/api/user/register', action.payload);
    yield put({ type: 'LOGIN', payload: action.payload });

  } catch (error) {
    console.log('Error with user registration:', error);
    yield put({ type: 'REGISTRATION_FAILED' });
  }
}

function* userSaga() {
  yield takeEvery('FETCH_USER', fetchUser);
  yield takeEvery('REGISTER', registerUser)
}

export default userSaga;
