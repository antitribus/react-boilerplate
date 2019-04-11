import * as Types from './ApplicationTypes';

export const INITIAL_STATE = {
    name: 'Your Application Name',
    errors: {}
};

const ApplicationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.SET_APPLICATION_NAME: {
            return {
                ...state,
                name: action.payload
            }
        }
        case Types.SET_APPLICATION_ERRORS: {
            return {
                ...state,
                errors: action.payload
            }
        }
        default:
            return state;
    }
};

export default ApplicationReducer;