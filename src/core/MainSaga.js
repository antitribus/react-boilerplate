import {all} from 'redux-saga/effects';

import ApplicationSagas from '../modules/Application/ApplicationSagas';

function* MainSaga() {
    yield all([
        ApplicationSagas()
    ]);
}


export default MainSaga;