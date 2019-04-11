import * as Types from './ApplicationTypes';

// Set nome da aplicação
export const setName = (payload) => ({
    type: Types.SET_APPLICATION_NAME,
    payload
});

// Set errors gerais da aplicação
export const setErrors = (payload) => ({
    type: Types.SET_APPLICATION_ERRORS,
    payload
});
