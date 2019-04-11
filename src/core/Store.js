import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import MainSaga from './MainSaga';
import MainReducer from './MainReducer';

// Inicializa o Middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    sagaMiddleware
];

// Configura a Store
const Store = createStore(
    MainReducer,
    composeWithDevTools(
        applyMiddleware(...middlewares),
        // other store enhancers if any
    )
);

// Injeção de todas as Sagas no Middleware
sagaMiddleware.run(MainSaga);

export default Store;

