import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Details } from './details';
import { InitialUsers } from './forms';
import { createForms } from 'react-redux-form';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            details: Details,
            ...createForms({
                users: InitialUsers
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}