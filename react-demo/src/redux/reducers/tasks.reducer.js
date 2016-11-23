/**
 * reducer for tasks
 */

import {SET_TASKS} from '../actions/tasks.actions';

const initialState = {
    tasks: []
}

export function taskReducer(state=initialState, action) {
    switch (action.type){
        case SET_TASKS:
            return Object.assign({}, state, {
                tasks: action.payload
            });
        default:
            return state;
    }
}
