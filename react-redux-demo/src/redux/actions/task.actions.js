/**
 * actions for the tasks state
 */

// {type: string, payload: any}

export const SET_TASKS = 'SET_TASKS';

/**
 *
 * @param {Array<Task>} tasks
 * @returns {{type: string, payload: *}}
 */
export function setTasksArray(tasks){
    return {
        type: SET_TASKS,
        payload: tasks
    }
}
