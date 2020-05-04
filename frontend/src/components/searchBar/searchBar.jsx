import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import './style.scss'

class SearchBar  extends React.Component { 
    
    constructor (props){
        super(props);
        this.state = {
            value: '',
            response: undefined
        }
        this.search = this.search.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.pressEnterHandler = this.pressEnterHandler.bind(this)
        this.onClickHandler = this.onClickHandler.bind(this)
        this.pressEnterHandlerResults = this.pressEnterHandlerResults.bind(this)
    }

//-------------- Handlers ---------------

//--------- search bar input handlers ---
    pressEnterHandler ( event ){
        if (event.key == 'Enter'){ //Conditional if ' Enter ' is pressed the itemPageSubmit function will run
            this.search()
        }
     }

//------ search bar results box handler ---    
   
    onClickHandler ( event ){
        let value = event.currentTarget.attributes.value.value
        this.searchThroughtResults(value) 
    }

    pressEnterHandlerResults ( event ){
    let value = event.currentTarget.attributes.value.value
    if (event.key == 'Enter'){ //Conditional if ' Enter ' is pressed the itemPageSubmit function will run
        this.searchThroughtResults(value)
    }
 }
//-----------------------------------------


    async handleChange (event){  //

        this.setState({value: event.target.value})
         if (this.state.value.length > 2){

            let formdata = new FormData()                //creating the FormData, its supposed to be an actual form i didnt knew that before :p
            formdata.append('value', event.target.value)    
            
            
            await fetch('http://localhost:4000/search',   //sending the data to update the results on the search bar
               { method: 'post',
                body: formdata
                }).then( async Response => {
                    let data = await Response.json()
                    let { results } = data
                this.setState({response: results})
            }).catch( e =>{
                console.log(e)                           //if an error happens, this shows it
            })
         }

    }

//------------ Search --------------------------
    
    async search (){
        await fetch ('http://localhost:4000/search/'+ this.state.value)
        .then( async response => this.props.searchResponse (await response.json())) //updating the result of the search on redux
        this.props.history.push('/search/'+this.state.value)
    }
    
    async searchThroughtResults (value){
        await fetch ('http://localhost:4000/search/'+ value)
        .then( async response => this.props.searchResponse (await response.json())) //updating the result of the search on redux
        this.props.history.push('/search/'+ value)
    }
//-------------------------------------------------


    render (){
    return (
        <div className="search-bar" tabIndex={1}>
                
                <div  className='search-input' >
                    <input  placeholder='search' className='search' value={this.state.value} onChange={this.handleChange} onKeyPress={this.pressEnterHandler} tabIndex={0}></input>    
                    <div className="x-button" onClick={ () => this.setState({ value: '', response: undefined}) }>
                    </div>
                    <div className="search-icon" onClick={ this.search }>
                        
                    </div>
                </div>
                {
                    this.state.response != undefined ?  
                    <div className="search-results">
                   {
                       this.state.response.map( items =>(
                           <a key={items.id} className='items-each-result' value={items.name} onKeyPress={this.pressEnterHandlerResults} onClick={this.onClickHandler} tabIndex={0}>{items.name}</a>
                       ))
                   }
                   </div> : 
                ''
                }
             
        </div>
    )}

}

const mapDispatchtoProps = (dispatch) =>(
    {
            searchResponse: (search)=>{dispatch({ type:'MODIFY_SEARCH', payload: search })}    
    }   
)
export default connect (null , mapDispatchtoProps )(withRouter(SearchBar));