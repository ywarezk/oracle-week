/**
 * React hello world entry point
 */

import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import createStore from './redux/store/store';
import AddTask from './components/add-task.component';
import TaskList from './components/task-list.component';

class AppComponent extends React.Component {

    render(){
        return (
            <div>
                <AddTask />
                <TaskList />
            </div>
        );
    }
}

ReactDom.render(<Provider store={createStore()}><AppComponent /></Provider>, document.getElementById('content'));






