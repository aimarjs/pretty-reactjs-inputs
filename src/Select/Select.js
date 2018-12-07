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

    render() {
        const { style, options } = this.props
        const { isOpen } = this.state        
        return (
            <div className="select-wrapper">
                <div className='select-box' style={style} onClick={this.dropdownHandler}>
                    <span>{this.props.label}</span>
                    <Icon icon={!isOpen ? 'angle-down' : 'angle-up'} />
                </div>
                <div className={!isOpen ? 'select-dropdown' : 'select-dropdown open'}>
                    <ul>
                        {
                            options.map(opt => {
                                return <li key={opt}>{opt}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Select;