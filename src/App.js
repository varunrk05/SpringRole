import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/navbar';
import Profile from './Components/profile';
import ExpEndorse from './Components/experience';
import Bio from './Components/bio';
import WorkSkEd from './Components/wse';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Profile />
        <ExpEndorse />
        <Bio />
        <WorkSkEd />
      </div>
    );
  }
}

export default App;
