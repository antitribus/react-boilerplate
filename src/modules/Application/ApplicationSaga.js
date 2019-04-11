import * as Saga from 'redux-saga/effects';
import * as Action from './ApplicationAction';

export function* setName(action) {
    try {
        const {name} = action.payload;
        yield Saga.put(Action.setName(name));
    } catch (error) {
        yield Saga.put(Action.setErrors({
            name: 'Não foi possível salvar o nome da aplicação.'
        }));
    }
}

/*export function* watchSetName() {
    yield Saga.takeLatest(Typ)
}*/

function* ApplicationSaga() {
    yield Saga.all([
        //watchSetName()
    ])
}

export default ApplicationSaga;