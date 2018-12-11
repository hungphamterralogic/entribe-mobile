import { all } from "redux-saga/effects";
import { watchIncreaseFirstNumByOne } from "./watchIncreaseFirstNumByOne";

export default function* sagas() {
  yield all([watchIncreaseFirstNumByOne()]);
}
