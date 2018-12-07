import React, { Component } from 'react'
import Icon from '../Icon/Icon'

import './Select.scss'

class Select extends Component {
    state = {
        isOpen: false,
        selectedValue: ''
    }

    dropdownHandler = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    }

    valueSelectHandler = (e) => {
        let currentState = {...this.state}      
        currentState.selectedValue = e.target.id
        currentState.isOpen = false
        this.setState(currentState)
    }

    render() {
        const { label, style, options } = this.props
        const { isOpen, selectedValue } = this.state
        console.log(this.state);
        
        return (
            <div className="select-wrapper">
                <div className='select-box' style={style} onClick={this.dropdownHandler}>
                    <span>{selectedValue === '' ? label : selectedValue}</span>
                    <Icon icon={!isOpen ? 'angle-down' : 'angle-up'} />
                </div>
                <div className={!isOpen ? 'select-dropdown' : 'select-dropdown open'}>
                    <ul>
                        {
                            options.map(opt => {
                                return <li key={opt} id={opt} onClick={this.valueSelectHandler}>{opt}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Select;