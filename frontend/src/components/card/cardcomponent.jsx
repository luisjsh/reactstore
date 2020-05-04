import React from 'react'

import './style.scss'

const Card = ({children}) => (
    <div className='card-content'>
        {children}
    </div>
)

export default Card