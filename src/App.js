import React, { Component } from "react";
import './App.css';

import Profile from './components/Profile';
import FriendsPage from './components/FriendsPage';

//import { Route, Link, Switch, Redirect } from 'react-router-dom';import logo from './logo.svg';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
        user: {
        name: "Casey Harding",
        username:"CRHarding",
        image: "https://pyxis.nymag.com/v1/imgs/d03/4b9/90a25fc9186862b0ce9c59b2529e792d32-StanLeevulturefinal.rhorizontal.w1100.jpg",
        friendList: ["Leo"] 
      },
      apiDataLoaded: false,
      potentialFriends: []
    }  
  }
     

  render() {
    return (
      <div className="App">
        <h1>CaseyBook</h1>
        <Profile user={this.state.user} />
        <FriendsPage />
        
      </div>
    );
  
  };
}

export default App;
