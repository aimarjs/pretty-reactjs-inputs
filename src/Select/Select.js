import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

import './Select.scss';

class Select extends Component {
    state = {
        isOpen: false,
        selectedValue: '',
    }

    static propTypes = {
        label: PropTypes.string,
        style: PropTypes.object,
        options: PropTypes.array,
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.outsideClickHandler, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.outsideClickHandler, false);
    }

    dropdownHandler = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
        }));
    }

    valueSelectHandler = (e) => {
        const currentState = { ...this.state };
        if (e.target.id !== '') {
            currentState.selectedValue = e.target.id;
            currentState.isOpen = false;
        } else {
            currentState.isOpen = false;
        }
        this.setState(currentState);
    }

    outsideClickHandler = (e) => {
        if (this.node.contains(e.target)) {
            return;
        }
        if (this.state.isOpen) {
            this.valueSelectHandler(e);
        }
    }

    render() {
        const { label, style, options } = this.props;
        const { isOpen, selectedValue } = this.state;

        return (
            <div className="select-wrapper" ref={node => this.node = node}>

                <div className="select-box" style={style} onClick={this.dropdownHandler}>
                    <span>{selectedValue === '' ? label : selectedValue}</span>
                    <Icon icon={!isOpen ? 'angle-down' : 'angle-up'} />
                </div>
                <div className={!isOpen ? 'select-dropdown' : 'select-dropdown open'}>
                    <ul>
                        {
                            options.map(opt => <li key={opt} id={opt} onClick={this.valueSelectHandler}>{opt}</li>)
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Select;
