/**
 * hello world component
 */

import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from './redux/store/create-store';
import CreateTask from './CreateTask.component';
import ListTasks from './ListTasks.component';

class Homepage extends React.Component {
    render(){
        return (
            <div>
                <CreateTask />
                <ListTasks />
            </div>
        );
    }
}

ReactDom.render(<Provider store={createStore()}><Homepage /></Provider>, document.getElementById('content'));
