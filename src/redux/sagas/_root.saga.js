import { all } from 'redux-saga/effects';
import searchSaga from "./search.saga"
import userSaga from "./user.saga"
import loginSaga from "./login.saga"
import ratedSaga from "./rated.saga"
export default function* rootSaga() {
    yield all([
      searchSaga(),
      userSaga(),
      loginSaga(),
      ratedSaga()
    ]);
  }