/**
 * actions for our tasks
 */

export const SET_TASKS = 'SET_TASKS';

export function setTasks(tasks){
    return {
        type: SET_TASKS,
        payload: tasks
    }
}
