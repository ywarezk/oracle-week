/**
 * create my redux store
 */

import {createStore as createReduxStore} from 'redux';
import taskReducer from '../reducers/task.reducer';

export default function createStore(){
    return createReduxStore(taskReducer);
}
