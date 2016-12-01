/**
 * component for the form to add new tasks
 */

import React from 'react';
import {connect} from 'react-redux';
import {setTasksArray} from '../redux/actions/task.actions';

@connect(
    state => ({
        myComponentTasks: state.tasks
    }),
    dispatch => ({
        myChangeTasks: (tasks) => dispatch(setTasksArray(tasks))
    })
)
export default class AddTask extends React.Component {

    constructor(){
        super();
        this.addTask = this.addTask.bind(this);
    }

    addTask(event){
        const title = this.titleInput.value;
        const description = this.descriptionInput.value;
        const {myComponentTasks} = this.props;
        const newTasksArray = myComponentTasks.splice(0);
        newTasksArray.push({
            title,
            description
        });
        this.props.myChangeTasks(newTasksArray);
        event.preventDefault();
    }

    render(){
        console.log('im rerendering');
        return (
            <form onSubmit={this.addTask}>
                <div>
                    <label>Title</label>
                    <input ref={titleDom => this.titleInput = titleDom} />
                </div>
                <div>
                    <label>Description</label>
                    <input ref={descriptionDom => this.descriptionInput = descriptionDom} />
                </div>
                <div>
                    <button type="submit">submit</button>
                </div>
            </form>
        )
    }
}
