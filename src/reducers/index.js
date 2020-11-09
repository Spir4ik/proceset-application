import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions'


const token = handleActions({
    [actions.getAccessToken](state, {payload: {token}}) {
        return token
    }
},
    ''
);


const processList = handleActions({
    [actions.getProcessList](state, {payload: {processList}}) {
       return processList
    }
},
    null
);

const firstName = handleActions({
    [actions.getFirstName](state, {payload: {firstName}}) {
        return firstName
    }
},
    ''
);

export default combineReducers({
    processList,
    token,
    firstName
})