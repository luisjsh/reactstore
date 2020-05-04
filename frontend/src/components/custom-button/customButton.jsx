import React from 'react'

import './style.scss'

const CustomButton = ({ buttonsize ,children, ...otherProps}) => (
    <button className={ buttonsize != null ? buttonsize : 'custom-button'  } {...otherProps}>
        {children}
    </button>
)

export default CustomButton