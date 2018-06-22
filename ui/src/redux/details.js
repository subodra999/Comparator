import * as ActionTypes from './ActionTypes';

export const Details = (state = {
    isLoading: true,
    redirectToResult: false,
    errMess: null,
    details: null}, action) => {
        switch(action.type) {
            
            case ActionTypes.ADD_DETAILS:
                return {...state, isLoading: false, redirectToResult: true , errMess: null, details: action.payload };
            
            case ActionTypes.LOADING_DETAILS:
                return {...state, redirectToResult: true, isLoading: true, errMess: null, etails: null};
            
            case ActionTypes.FAILED_DETAILS:
                return {...state, isLoading: false, redirectToResult: false, errMess: action.payload};

            default:
                return state;
        }
    };