import React from 'react';
import Form from './Form';

class FormView extends React.Component {

    constructor(props) {
        super(props);
        this.action = this.action.bind(this);
    }

    action(val) {
        console.log(val);
    }

    render() {
        return (
            <div>
                <h1>Form Page</h1>
                <Form submitAction={this.action} />
            </div>
        )
    }
}

export default FormView;