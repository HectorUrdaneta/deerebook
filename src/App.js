import React, { Component } from "react";
import './App.css';

import { Route, Link, Switch, Redirect } from 'react-router-dom';import logo from './logo.svg';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
        user:"Casey Harding",
        username:"CRHarding",
        image: "",
        friendList: [] 
      },
      apiDataLoaded: false,
      potentialFriends: []
    }
     

  render() {
    return (
      <div className="App">
        
      </div>
    );
  
  };
}

export default App;
