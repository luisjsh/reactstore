import React from 'react'

import './styles.scss'

const CardBg = ({ children }) => (
    <div className="card-bg-outlimit">
        <div className="card-bg-itself">
        {children}
        </div>
    </div>
)

export default CardBg