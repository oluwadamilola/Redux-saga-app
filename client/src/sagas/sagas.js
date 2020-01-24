import { all, call, delay, put, takeEvery } from 'redux-saga/effects'

export function* helloSaga() {
    console.log('Hello Saga!')
}

export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* incrementAsync() {
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
}

export default function* rootSaga() {
    yield all([
        call(helloSaga),
        call(watchIncrementAsync),
    ])
}