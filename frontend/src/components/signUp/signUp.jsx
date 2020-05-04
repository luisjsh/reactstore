import React from 'react'
import axios from'axios'
import { connect } from 'react-redux'
import {withRouter, Link} from 'react-router-dom'


import SignUpForm from '../FormWithRequest/form'
import CustomButton from '../custom-button/customButton'
import './styles.scss'
import Card from '../card/cardcomponent'

class signUp extends React.Component{
    constructor(props){
    super(props);
    this.state = {
       email: '',
       password: '',
       dataVerification: null
    }
}


handleChange = event =>{
    const { value, name }  = event.target;
    this.setState({ [name]: value});
}


HandleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:4000/user/createNewUser', {
    email: this.state.email, password: this.state.password
    }).then( Response => {
        this.setState({
            dataVerification: Response.data.status
        })        
        if(this.state.dataVerification !== 'wrong email' ){
            this.props.modifyUser(this.state.email)
            this.props.history.push('./')
        } else {

        }


    })  
}


render(){
    return(
    <div className='signup-page'>
        <div className='image'>

        </div>
        <div className="signup-card">
        <Card>
            <div className="SignUp">

            { this.state.dataVerification == null ? 
            <div>
                <h2>Sign up</h2>
                <span>Its your lucky day!</span> 
            </div>
            :
            <div>
                <h2>Email already choosed</h2>
            </div>
  }

           <form onSubmit={this.HandleSubmit}>
             
             <SignUpForm name='email' type='email' handleChange={this.handleChange} value={this.state.email} label='email' required/>
             <SignUpForm name='password' type='password' handleChange={this.handleChange} value={this.state.password} label='password' required/>
             <CustomButton buttonsize='button-sm' type='submit'>Sign Up!</CustomButton>
            
            </form>
            </div>
        </Card>
        </div>

    </div>
    )
}
}

const mapDispatchtoProps = (dispatch) =>(
    {
            modifyUser: (email)=> {dispatch({ type:'MODIFY_USER', payload: email})}
    }   
    )
    

export default connect (null, mapDispatchtoProps)(withRouter(signUp));