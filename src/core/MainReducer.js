import {combineReducers} from 'redux';

/* Import dos reducers */
import application from '../modules/Application/ApplicationReducer';

const MainReducer = combineReducers({
    application
});

export default MainReducer;
