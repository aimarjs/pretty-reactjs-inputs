import React from 'react';
import { Select, Input } from '../../../src';
import './styles.scss'

// const styles = { border: '1px solid red', background: 'gray', color: '#fff' }

const options = ['value 1', 'value 2', 'value 3', 'value 4', 'value 5']

const App = () => (
    <div className="App">
        <Select options={options} label="This is select component" />
    </div>
);

export default App;