import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './styles.scss'

class SearchPage extends React.Component{
    
    constructor (props){
        super(props);
        this.state = {
            response: []
        }
        this.onClickHandler = this.onClickHandler.bind(this)
        this.productPageRedirect = this.productPageRedirect.bind(this)        
        this.pressEnterHandler = this.pressEnterHandler.bind(this)
         
    }

//-------------- Handlers --------------

    onClickHandler ( event ){
        let value = event.currentTarget.attributes.value.value
        this.productPageRedirect(value) 
    }

    pressEnterHandler ( event ){
        let value = event.currentTarget.attributes.value.value
        if (event.key == 'Enter'){ //Conditional if ' Enter ' is pressed the itemPageSubmit function will run
            this.productPageRedirect(value)
        }
     }

//--------------------------------------

//---------- Redirect to the product page--

    async productPageRedirect ( value ){

        await fetch('http://localhost:4000/product/'+value)
        .then( 
            async Response =>{
                let product = await Response.json()  //the response will became a json, that way ill save for the product page
                this.props.modifyProduct({currentProduct: product.productResult, currentSeller: product.userResult})
                this.props.history.push('/product/'+product.productResult.name)
            })

    }

//-----------------------------


    render () {
        return (
        <div className="card-background">
            <div className="card-results">
            { this.props.currentSearch !== null ? 
            <div> 
              {this.props.currentSearch.results.map(product =>(
                 product.productimages.length > 0 ? //condition of the length, if its more than 0 it should run
                    
                 //here starts the list of results
                    <div key={product.id} className="product-list" value={product.name} onKeyPress={this.pressEnterHandler} onClick={this.onClickHandler}>  
                            <div className="product" tabIndex={0}>
                                    <div key={product.id} className='product-image' style= {{backgroundImage: 'url(http://localhost:4000/'+product.productimages[0].path+')'}}>
                                    </div>
                                    <div className="product-data" >
                                        <div className="product-name">
                                            {product.name}
                                        </div>
                                        <div className="product-price">
                                            price: {product.price}
                                        </div>
                                    </div>
                            </div>
                    </div>
                 
                 

                   : ''
              ))}
            </div> : 
            <div className='empty-search'>
                
            </div>
            }
            </div>
        </div>
    )}
    
}

const mapStatetoProps = ({ search:{currentSearch} })=>{
    return{
        currentSearch //its default value its null, but it changes everytime the searchbutton its clicked
    }
}

const mapDispatchtoProps = (dispatch) =>{
    return{
        modifyProduct: (product)=>{dispatch({type: 'MODIFY_PRODUCT', payload:product})}
    }
}


export default connect (mapStatetoProps, mapDispatchtoProps) (withRouter(SearchPage))