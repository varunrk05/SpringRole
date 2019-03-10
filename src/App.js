import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/navbar';
import Profile from './Components/profile';
import ExpEndorse from './Components/experience';

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
