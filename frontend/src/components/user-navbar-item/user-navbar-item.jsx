import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './styles.scss'
import CustomButton from '../custom-button/customButton'

const UserNavbarItem = ({children, history, LogOut}) => (
    <div>
        <div className='user-card'>
            <div className="inner-item">
            <div className='user-email'>
            { children }
            </div>        
            <div className='dropdown-card'>

                <div className="add-item">
                    <CustomButton buttonsize='button-addmore' onClick={ ()=> history.push('/additem')}> Add item </CustomButton>
                </div>

                <span className='dropdown-card-item' onClick={ ()=> history.push('/cart')}>Cart</span>
                <span className='dropdown-card-item' onClick={ ()=> history.push('/profile')}>Profile</span>
                <span className='dropdown-card-item-log-out' onClick={()=>LogOut()}>Log Out</span>
            
            </div>

            </div>
        <div className="user-image">
            <div className='image'>
            
            </div>
        </div>
        </div>

    </div>
)

const mapDispatchtoProps = (dispatch) =>(
    {
            modifyUser: (email)=> {dispatch({ type:'MODIFY_USER', payload: email})},
            LogOut:     ()     => {dispatch({ type:'LOG_OUT'})}
    }   
)

export default connect (null, mapDispatchtoProps) (withRouter(UserNavbarItem))