import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'

import SearchBar from '../searchBar/searchBar'
import Login from '../login/login'
import './navbar.scss';
import CustomButton from '../custom-button/customButton';
import UserNavbarItem from '../user-navbar-item/user-navbar-item'

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            view: false
        }
        
    }

     handleShow = () => {
         this.setState({view: true})
     }  

     handleClose = () =>{
         this.setState({view:false})
     }

    render(){
        return (
             <div>
                 <nav className="nav">
                 {this.state.view ? <Login handleClick={this.handleClose} modifyUser={this.props.modifyUser}/> : ''}
                        <div className='logo' onClick={()=>this.props.history.push('/')}>

                        </div>
                        <SearchBar/>
                 {this.props.currentUser != null ?
                       <UserNavbarItem >{this.props.currentUser}</UserNavbarItem>
                        :
                       <CustomButton buttonsize='button-login' logout={this.props.LogOut} onClick={this.handleShow}> Login </CustomButton>}
                            
                    
                 </nav>

            </div>
        )
    }
}

const mapStatetoProps = ({user: {currentUser}}) =>{
    return ({
        currentUser
    })
}
    
export default connect(mapStatetoProps)(withRouter(Nav));