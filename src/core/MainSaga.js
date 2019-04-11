import {all} from 'redux-saga/effects';

import ApplicationSaga from '../modules/Application/ApplicationSaga';

function* MainSaga() {
    yield all([
        ApplicationSaga()
    ]);
}


export default MainSaga;