import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import './styles.scss'


const ProfilePage = (props) => (
    <div>
        {props.currentUser == null ? props.history.push('/') : <div className="profile-page-card">
            <div className="inner-card-profile-image">
                <div className="profile-image">
                    
                </div>
                </div>
            <div className="card-bg">
                                
            <div className="data-user">
                    <span>email</span>

                    <span>bought items</span>

                    <span>Change password</span>
            </div>

            <div className="add-item">
                <div className="plus-item">
                    
                </div>
            </div>
            </div>
        </div>}
    </div>
)


const mapStatetoProps = ({user: {currentUser}}) =>{
    return ({
        currentUser
    })
}

export default connect(mapStatetoProps) (withRouter(ProfilePage))