import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = props => {
  return (
        <button 
            className={`btn ${props.className}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </button>
  )
}

const OnlineButton = props => {
  return (
        <button 
            className={`btn-outline ${props.className}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </button>
  )
}

Button.propTypes = {
    onclick: PropTypes.func
}

export default Button;