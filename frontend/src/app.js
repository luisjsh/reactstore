import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from './components/navbar/navbar.jsx';
import Homepage from './pages/homepage/homepagecomponent';
import SignUp from './pages/signUp/SignUpPage';
import searchResult from './pages/searchResult/searchResult.jsx';
import Profile from './pages/profile/profile'
import AddItem from './pages/additem/additem'
import productResult from './pages/product/productResult'


export default class App extends Component {
    render(){
        return (
            <div>
            <Nav/>
            <Switch>     
            <Route exact path='/' component={Homepage} />
            <Route exact path='/signUp' component={SignUp} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/additem' component={AddItem} />     
            <Route path='/search' component={searchResult} />
            <Route path='/product' component={productResult} />          
            </Switch>
            </div>
            )
        }

};


