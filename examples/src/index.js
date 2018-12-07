import React from 'react';
import { render} from 'react-dom';
import { Select, Input } from '../../src';

import './styles.scss'

const App = () => (
    <div className="App">
        <Select />
        <Input />
    </div>
);

render(<App />, document.getElementById("root"));