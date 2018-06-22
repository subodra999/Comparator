import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addDetails = (detail) => ({
    type: ActionTypes.ADD_DETAILS,
    payload: detail
});

export const detailsFailed = (errmess) => ({
    type: ActionTypes.FAILED_DETAILS,
    payload: errmess
});

export const detailsLoading = () => ({
    type: ActionTypes.LOADING_DETAILS
})

export const postUsers = (user1, user2) => (dispatch) => {

    dispatch(detailsLoading());

    // http://localhost:3001/?handle1=username1&handle2=username2
    return fetch(baseUrl + '?handle1=' + user1 + '&handle2=' + user2,{
        method: 'GET',
        credentials: "same-origin"
    })
    .then(response => {
        if(response.ok) {
            console.log("ok 1");
            return response
        } else {
            var error = new Error('Error '+response.status+': '+response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(details => dispatch(addDetails(details)))
    .catch(error => dispatch(detailsFailed(error.message)));
}