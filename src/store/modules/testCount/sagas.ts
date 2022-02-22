import { put, call, take, takeEvery } from 'redux-saga/effects';
import { actions as testCountActions } from './slice';

// worker Saga
export function* fetchIncrement() {
  yield put(testCountActions.fetchIncrementSuccess(100));
  // try {
  //   yield put(testCountActions.fetchIncrementSuccess(100));
  // } catch (error) {
  //   yield put(testCountActions.fetchIncrementFail(error as any));
  // }
}

// watcher Sagas
export function* fetchTradeAccountData() {
  while (true) {
    yield take([ testCountActions.fetchIncrement ]);
    yield call(fetchIncrement);

  }
}
