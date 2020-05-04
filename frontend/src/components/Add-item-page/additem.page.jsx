import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import './styles.scss'
import CardBg from '../card-bg/card-bg'
import FormInput from '../FormWithRequest/form'
import CustomButton from '../custom-button/customButton'

const data = [{id:1 , name:'hats' , url: './hats.svg'} , {id:2 , name:'shoes' , url:'./shoes.svg'},{id:3 , name:'pants' , url: './pants.svg'},{id:4 , name:'dress' , url:'./dress.svg'},,{id:5 ,name:'tshirt', url:'./tshirt.svg'}]



class AddItemPage extends React.Component {

    constructor (){
        super();
        this.state = {
            selectedFile: null,
            sex: '',
            categories: '',
            name:'',
            price:'0',
            stock:'0'
        }
    }
    


    fileSelectedHandler = event =>{
        let file = event.target.files
        this.setState({selectedFile: file })
    }

    stateUpdater = (data, value) =>{
        this.setState({ [data]: value})
    }


    handleChange = event =>{
        const { value, name }  = event.target;
        this.setState({ [name]: value});
        }

    handleSubmit = event =>{
        event.preventDefault();
        let formData = new FormData();

        formData.append('sex', this.state.sex)
        formData.append('categories', this.state.categories)
        formData.append('name', this.state.name)
        formData.append('price', this.state.price)
        formData.append('stock', this.state.stock)
        formData.append('email', this.props.currentUser)
        
        if ( this.state.selectedFile != null){
            for( let i = 0; i<this.state.selectedFile.length; i++){
                formData.append('image', this.state.selectedFile[i])
                }
        }

        fetch(
            'http://localhost:4000/product/addproduct', {
            method: 'POST',
            body: formData}
        ).then( Response => {
            this.props.history.push('./')
        }).catch( e => {
            console.log(e)
            this.props.history.push('./')
        })   
    }

    render ( ){
        return(
            <div>
                <CardBg>
                    <form enctype="multipart/form-data" onSubmit={this.handleSubmit}>
                        <div className='content'>
                            <input type='file' className='input-file-hidden' ref={ node => console.log(node)}id='file' onChange={ this.fileSelectedHandler } multiple></input>
                            <label htmlFor='file' className='input-file'> Upload Photo </label>

                            <div className="bottom-side">
                            <div className="form-input">
                            <h3> Information </h3>
                                <div className="form-input-margin-top">
                                <FormInput name='name'  label='item name' handleChange={this.handleChange}/>
                                <FormInput name='price' label='price' handleChange={this.handleChange}/>
                                <FormInput name='stock' label='stock' handleChange={this.handleChange}/>
                                </div>
                            </div>

                            <div className="categories-zone">
                                   <h3> Sex </h3>
                                  <div className='cardsparents'>
                                            <div className='female' onClick={ ()=>{this.stateUpdater('sex', 'female')}}>
                                            </div>
                                            <div className='male'onClick={ ()=>{this.stateUpdater('sex', 'male')}}>
                                            </div>
                                    </div>
                                    <h3> Categories </h3>
                                    <div className=' categories ' >
                                    
                                        {data.map (({ id,name, url}) => (
                                            <div style={{backgroundImage: 'url('+url+')'}}  className='items' key={id} onClick={ ()=>{this.stateUpdater('categories', name)}}  >
                                              
                                            </div>
                                        ))}
                                </div>
                            </div>
                            </div>
                            <CustomButton buttonsize='button-sm'> Submit </CustomButton>
                        </div>
                    </form>
                </CardBg>
            </div>
        )
    }
}

const mapStatetoProps = ({user: {currentUser}}) =>{
    return ({
        currentUser
    })
}
    
export default connect ( mapStatetoProps ) (withRouter(AddItemPage))