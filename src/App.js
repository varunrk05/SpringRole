import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar';
import Profile from './profile';
import ExpEndorse from './experience';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Profile />
        <ExpEndorse />
      </div>
    );
  }
}

export default App;
