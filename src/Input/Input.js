import React, { Component } from 'react';

import './Input.scss'

class Input extends Component {
    state = {
        message: 'This is Input component'
    }

    render() {
        return (
            <div className="message">
                {this.state.message}
            </div>
        );
    }
}

export default Input;