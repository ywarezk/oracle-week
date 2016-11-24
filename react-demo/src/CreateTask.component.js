/**
 * Create Task form component
 */

import React from 'react';
import {connect} from 'react-redux';
import { setTasks } from './redux/actions/tasks.actions';

@connect(
    (state) => ({
        tasksInCreateTask: state.tasks
    }),
    (dispatch) => ({
        setTasksInCreateTask: (tasks) => dispatch(setTasks(tasks))
    })
)
export default class CreateTask extends React.Component {

    constructor(){
        super();
        this.createTaskSubmitted = this.createTaskSubmitted.bind(this);
    }

    createTaskSubmitted(event) {
        const title = this.titleInput.value;
        const description = this.descriptionInput.value;
        const newTasksArray = this.props.tasksInCreateTask.slice();
        newTasksArray.push({
            title,
            description
        });
        this.props.setTasksInCreateTask(newTasksArray);
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.createTaskSubmitted}>
                <div>
                    <label>
                        Title
                    </label>
                    <input ref={(inputDom) => {this.titleInput = inputDom}} />
                </div>
                <div>
                    <label>
                        Description
                    </label>
                    <input ref={(inputDom) => {this.descriptionInput = inputDom}} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        );
    }
}
