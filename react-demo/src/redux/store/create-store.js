/**
 * function to create a new redux store
 */

import {createStore as createReduxStore} from 'redux';
import {taskReducer} from '../reducers/tasks.reducer';

export function createStore(){
    return createReduxStore(taskReducer);
}
