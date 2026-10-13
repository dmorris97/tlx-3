import React from 'react'

const EButton = ({ children, ...otherProps }) => {
    return (
        <button className='E-btn' {...otherProps}>
            {children}
        </button>
    )
}

export default EButton