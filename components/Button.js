import React from 'react';
import Proptypes from 'prop-types';

const Button = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className='border-2 mb-3 border-cab3fb text-cab2fb'>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: Proptypes.node.isRequired,
    onClick: Proptypes.func,
};

export default Button;
