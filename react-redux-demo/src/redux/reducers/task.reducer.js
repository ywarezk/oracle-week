/**
 * our task reducer
 */

import {SET_TASKS} from '../actions/task.actions';

const initialState = {
    tasks: []
}

export default function taskReducer(state = initialState, action){
    switch(action.type){
        case SET_TASKS:
            return Object.assign({}, state, {
                tasks: action.payload
            });
        default:
            return state;
    }
}
