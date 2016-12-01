/**
 * Created by yarivkatz on 01/12/2016.
 */


import React from 'react';
import {connect} from 'react-redux';

@connect(
    state => ({
        myTasks: state.tasks
    })
)
export default class TaskList extends React.Component{
    render(){
        const {myTasks} = this.props;
        return (
            <ul>
                {
                    myTasks.map((task) => {
                        return (
                            <li>
                                <h1>
                                    {task.title}
                                </h1>
                                <h3>
                                    {task.description}
                                </h3>
                            </li>
                        );
                    })
                }
            </ul>
        )
    }
}