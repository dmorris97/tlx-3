import React from 'react'

const WWOButton = ({ children, ...otherProps }) => {
    return (
        <button className='WWO-btn' {...otherProps}>
            {children}
        </button>
    )
}

export default WWOButton