import React from 'react'
import {withRouter} from 'react-router-dom'

import CustomButton from '../custom-button/customButton'
import './styles.scss'

const ImageBackground = ({title, imageUrl, history, email}) => (
    <div className='background' style={{
        backgroundImage: 'url('+imageUrl+')'
    }}>
        <CustomButton onClick= {()=>history.push('./'+title, email)}>{title}</CustomButton>
    </div>
)

export default withRouter(ImageBackground)