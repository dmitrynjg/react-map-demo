import { takeEvery, put, call } from 'redux-saga/effects';
import geoFetch from '../api/geoFetch';
import {
  fetchWayPointsStart,
  fetchWayPointsSuccess,
  fetchWayPointsFailure,
  setCurrentWayPoint,
} from '../slices/waypoints';

function* fetchWayPoints(list) {
  try {
    const response = yield call(() => geoFetch(list.payload));
    yield put(setCurrentWayPoint(response[0]));
    yield put(fetchWayPointsSuccess(response));
  } catch (error) {
    yield put(fetchWayPointsFailure(error.message));
  }
}

function* wayPointsSaga() {
  yield takeEvery(fetchWayPointsStart.type, fetchWayPoints);
}

export default wayPointsSaga;
