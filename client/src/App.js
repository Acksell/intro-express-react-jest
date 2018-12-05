import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const fetch = require('node-fetch')
const getVisitkort = require('./js/parseUsers.js').getVisitkort


class App extends Component {
  constructor(){
    super()
    this.state={users:[]}
    this.setUsers()
  }

  setUsers = () => fetch('/api/users').then(response => response.json()).then(users => this.setState({users:users.map(user => getVisitkort(user))}) )
  
  render() {
    return (
      <div className="App">
        <div>
          {this.state.users.map(visitkort => <p>{visitkort}</p>)}
        </div>
      </div>
    )
  }
}

export default App;
