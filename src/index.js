import React from 'react';

import './scss/main.scss';

import SelectComponent from './Select/Select';
import InputComponent from './Input/Input';

export const Select = props => <SelectComponent {...props} />;

export const Input = props => <InputComponent {...props} />;
