/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label }) => (
    <div className="message">
        {label}
    </div>
);

Input.propTypes = {
    label: PropTypes.string,
};

export default Input;
