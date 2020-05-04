import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Axios from 'axios'


import './styles.scss'
import SignUpForm from '../FormWithRequest/form'
import CustomButton from '../custom-button/customButton'
import Card from '../card/cardcomponent'
import Modal from '../modal/modalComponent'


class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           email: '',
           password: '',
           verify: false
        }
    }

    handleSubmit = async (event) =>{
        event.preventDefault()
        await Axios.post('http://localhost:4000/user/emailverification',{
            email: this.state.email
        }).then(response => {
                response.data.email === this.state.email && response.data.password === this.state.password ? 
                
                this.updateRedux(response.data.email)
                    : 
                this.setState({verify: true})
            }).catch(e => {
                alert('error whit server connection')
        })
        
    }

    updateRedux = email =>{
        this.props.modifyUser(email)
        this.props.handleClick()
    }
    
    handleChange = event =>{
    const { value, name }  = event.target;
    this.setState({ [name]: value});
    }


    render (){
    return (
        <Modal handleClick={this.props.handleClick}>
            <div className="top">
            <Card>
            {
                this.state.verify ? <h2>Something its wrong!</h2> :  
                <div>
                    <h2>Go Ahead</h2>

                    <span> Sign Up! </span>
                    <span> or </span>
     
                </div>
            }
            <form onSubmit={this.handleSubmit} className='form'>
               <SignUpForm name='email' type='email' label='email' handleChange={this.handleChange} value={this.state.email}required/>
               <SignUpForm name='password' type='password' label='password' handleChange={this.handleChange} value={this.state.password}required/>
            <CustomButton buttonsize='button-sm' >Login</CustomButton>
            </form>

            <Link className='forgotPassword' onClick={()=>{console.log('link')}}>¿Reset your password?</Link>
            <Link className='forgotPassword' onClick={this.props.handleClick}>Sign Up</Link>
     
            </Card>
            </div>
        </Modal>
    )}
}


const mapDispatchtoProps = (dispatch) =>(
    {
        modifyUser: (email)=> {dispatch({ type:'MODIFY_USER', payload: email})}
    }   
)


export default connect (null, mapDispatchtoProps)(Login)