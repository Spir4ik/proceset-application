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

export default combineReducers({
    processList
})