import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import "regenerator-runtime/runtime";

var data = null;

function* down() {
  console.log("saga enters");

  axios
    .get(`http://localhost:4200/videoComments/CBZpMuFBj5s`)
    .then(res => {
      console.log(res);
      this.data = res;
    })
    .catch(e => {
      console.log(e);
    });

  yield put({
    type: "decrease_ASYNC",
    payload: 4
  });
  console.log("test");
  yield put({
    type: "decrease_ASYNC",
    payload: 2
  });
}

export function* watchDecrease() {
  yield takeEvery("decrease", down);
  //   yield takeEvery("decrease", () => {
  //     console.log("saga working");
  //   });
}
