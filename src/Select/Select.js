import React, { Component } from 'react';

class Select extends Component {
    state = {
        message: 'This is select component'
    }

    render() {
        return (
            <div>
                {this.state.message}
            </div>
        );
    }
}

export default Select;