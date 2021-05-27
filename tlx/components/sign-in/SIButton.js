import React from 'react'

const SIButton = ({ children, ...otherProps }) => {
    return (
        <button className='si-btn' {...otherProps}>
            {children}
        </button>
    )
}

export default SIButton
