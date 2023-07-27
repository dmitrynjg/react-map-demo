import { all } from 'redux-saga/effects';
import wayPointsSaga from './waypoints';

function* rootSaga() {
  yield all([wayPointsSaga()]);
}

export default rootSaga;
