import React, { Component } from 'react';

class Input extends Component {
    state = {
        message: 'This is Input component'
    }

    render() {
        return (
            <div>
                {this.state.message}
            </div>
        );
    }
}

export default Input;