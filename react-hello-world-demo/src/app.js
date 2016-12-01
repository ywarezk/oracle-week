/**
 * React hello world entry point
 */

import React from 'react';
import ReactDom from 'react-dom';

class HelloWorld extends React.Component {

    constructor(){
        super();
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(){
        alert(this.greetingInput.value);
    }

    render(){
        return (
            <form onSubmit={this.submitForm}>
                <label>Greeting</label>
                <input type="text" ref={domInput => this.greetingInput = domInput} />
            </form>
        );
    }
}

ReactDom.render(<HelloWorld />, document.getElementById('content'));






