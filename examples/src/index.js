import React from 'react';
import { render} from 'react-dom';
import { Select, Input } from '../../src';

const App = () => (
    <div>
        <Select />
        <Input />
    </div>
);

render(<App />, document.getElementById("root"));