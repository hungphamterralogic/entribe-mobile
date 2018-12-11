import { put, takeEvery } from "redux-saga/effects";
import { delay } from "redux-saga";
import { increaseSecondNumByTwo } from "@actions/numberActions";

export function* handleIncreaseFirstNumByOne() {
  yield delay(500);
  yield put(increaseSecondNumByTwo());
}

export function* watchIncreaseFirstNumByOne() {
  yield takeEvery("INCREASE_FIRST_NUMBER_BY_ONE", handleIncreaseFirstNumByOne);
}
