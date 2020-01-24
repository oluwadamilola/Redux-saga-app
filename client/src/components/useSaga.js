import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from '../reducers/reducer'
import rootSaga from '../sagas/sagas'

const useSaga = () => {


    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        reducer,
        applyMiddleware(sagaMiddleware)
    )
    sagaMiddleware.run(rootSaga)

    const action = type => store.dispatch({ type })
    return {
        action,
        store,
        sagaMiddleware
    }


}
export default useSaga;