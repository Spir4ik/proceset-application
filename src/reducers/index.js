import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions'

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
    firstName
})