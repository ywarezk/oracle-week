/**
 * display the list of tasks
 */

import React from 'react';
import {connect} from 'react-redux';

@connect(
    (state) => ({
        tasks: state.tasks
    })
)
export default class ListTasks extends React.Component {
    static propTypes = {
        tasks: React.PropTypes.array.isRequired
    }

    render() {
        const {tasks} = this.props;
        return (
            <ul>
                {
                    (() => {
                        return tasks.map((singleTask) => {
                            return (
                                <li>
                                    <h1>{singleTask.title}</h1>
                                    <h3>{singleTask.description}</h3>
                                </li>
                            );
                        });
                    })()
                }
            </ul>
        )
    }
}
