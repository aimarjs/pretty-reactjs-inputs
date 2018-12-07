import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faAngleDown, faAngleUp)

const Icon = ({ icon }) => (
    <FontAwesomeIcon icon={icon} />
);

Icon.propTypes = {
    Icon: PropTypes.string,
};

export default Icon;