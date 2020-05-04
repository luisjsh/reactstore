import React from 'react'

import './styles.scss'

const NavbarComponent = ({children, ...otherProps}) => (
    <div>
        <h3 className='navbar' {...otherProps}>{children}</h3>
    </div>

);

export default NavbarComponent