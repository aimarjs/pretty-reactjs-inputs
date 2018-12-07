import React from 'react';

import SelectComponent from './Select/Select'
import InputComponent from './Input/Input'

export const Select = (props) => {
  return <SelectComponent {...props} />
};

export const Input = (props) => {
  return <InputComponent {...props} />
};

