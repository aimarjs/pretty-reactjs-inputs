import React, { Component } from 'react';

class index extends Component {
    state = {
      message: 'Hello!',
    }

    render() {
      return (
        <div>
          {this.state.message}
        </div>
      );
    }
}

export default index;
