import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './styles.scss'
import CustomButton from '../custom-button/customButton'

class  productPage extends React.Component {
   
    constructor (props){
        super(props)
        this.state = {
            x : 0,
            price: 0,
            stock: 1
        }

//------------Product images carrousel ---------
        this.goLeft = this.goLeft.bind(this)
        this.goRight = this.goRight.bind(this)
//--------------- Price and stock functions ----
        this.priceHandler = this.priceHandler.bind(this)
    }

    componentDidMount(){
        
       if ( this.props.currentProduct != null ){
            this.setState({
                price: this.props.currentProduct.price
            })
        }
    }



//---------------- Carrousel ----------------------
    goLeft = () =>{

        let x = this.state.x + 100
        let y = 100 + (this.props.currentProduct.productimages.length * - 100)
        x ===  100 ? //if x is bigger than 0 ill go back to 0
        this.setState({x: y}) : 
        this.setState({x: x})

   }


    goRight = () =>{

        let x = this.state.x - 100
        x === - 100 * (this.props.currentProduct.productimages.length ) ?
        this.setState({x: 0}) : 
        this.setState({x: x})

   }
//----------------------------------------------------------------------------

   priceHandler (event){
        if (event.target.attributes.class.value === 'stock-plus'){
            
            if (this.props.currentProduct.stock > this.state.stock){
               
                let stock = parseInt(this.state.stock) + 1
                let price = parseInt(this.props.currentProduct.price) * stock
                this.setState({price: price, stock: stock})
            }

        } else {

           

            if (this.props.currentProduct.price < this.state.price ){
                
                let stock = parseInt(this.state.stock) - 1
                let price = parseInt(this.props.currentProduct.price) * stock
                this.setState({price: price, stock: stock})

            }
        }

   }


//-----------------------------------------------------------------------------
   render(){
   return (
    <div>
        
    {
        this.props.currentProduct == null ? 
        
        <div className="product-page">
                
        <div className="product-card">
            <div className="no-product">
           
            </div> 
            <CustomButton onClick={ ()=>this.props.history.push('/')}>Go to Homepage</CustomButton>
        </div>


    </div>

        :
        <div className="product-page">
                
            <div className="product-card">
                <div className="product-slider" >
                       {
                           this.props.currentProduct.productimages.map( ({id, path, name}) =>(
                               <img key={id} src={'http://localhost:4000'+path} className="slide" style={{transform:'translateX('+this.state.x+'%)'}} ></img>
                           ))
                       }
                <button id='go-left' onClick={this.goLeft}></button>
                <button id='go-right' onClick={this.goRight}></button>
                </div>
            </div>

            <div className="shop-card">
                    
                    <div className="content">
                        <div className="seller-section">
                        <a>Sold by </a>
                        <a className='seller-email'><strong>{this.props.currentSeller.email}</strong></a> 
                    </div>

                    <a className='product-name'>{this.props.currentProduct.name}</a>
                    <div className='product-price'>{this.state.price}$</div>
                   
                    <div className='product-stock'>
                        <div className='stock-section'>
                            <label htmlFor="stock-input" className='label'>Stock</label>
                            <div   className='stock-input' id='stock-input'>{this.state.stock}</div>
                            <div   className='stock-plus' onClick={this.priceHandler}></div>
                            <div   className='stock-less' onClick={this.priceHandler}></div>
                         </div>
                         <div>
                        <a>{this.props.currentProduct.stock} Available</a>
                         </div>
                    </div>
                        
                        <div className='button-section'>
                            <div className='button-cart'>
                                <div>
                                    Add to Cart
                                </div>
                                <div className="cart-image">

                                </div>
                                </div>
                            <CustomButton buttonsize='button-buynow'>Buy Now</CustomButton>
                        </div>
                    </div>
            </div>

        </div>
    }

</div>
   
)}}

const mapStatetoProps = ({product: {currentProduct, currentSeller} })=>{
    return({
        currentProduct, currentSeller 
    })
        
}

export default connect ( mapStatetoProps , null ) (withRouter(productPage))