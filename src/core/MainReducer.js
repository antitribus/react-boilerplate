import {combineReducers} from 'redux';

/* Import dos reducers */
import application from '../modules/Application/ApplicationReducers';

const MainReducer = combineReducers({
    application
});

export default MainReducer;
