import React, { Component } from "react";
import './App.css';
import axios from 'axios';

import Profile from './components/Profile';
import FriendsPage from './components/FriendsPage';

import { Route, Link, Switch, Redirect } from 'react-router-dom';import logo from './logo.svg';

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
  componentDidMount = async () => {  
    const friendOne = await axios.get("https://randomuser.me/api/");
    const friendTwo = await axios.get("https://randomuser.me/api/");
    const friendThree = await axios.get("https://randomuser.me/api/");
    const friendFour = await axios.get("https://randomuser.me/api/");
    const friendFive = await axios.get("https://randomuser.me/api/");
    
    const friends = [
      friendOne.data.results[0],
      friendTwo.data.results[0],
      friendThree.data.results[0],
      friendFour.data.results[0],
      friendFive.data.results[0]];
    this.setState ({
      potentialFriends: friends,
      
    })
  }     

  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Profile</Link>
          <Link to="/users">Users</Link>
        </nav>
        <h1>CaseyBook</h1>
        <Route path="/" render={() => (
          <Profile user={this.state.user}/>
        )} />
        <Route path="/users" render={() => (
          <FriendsPage potentialFriends={this.state.potentialFriends}/>
        )} />
        
        
      </div>
    );
  
  };
}

export default App;
