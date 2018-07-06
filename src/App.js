import React, { Component } from 'react';
import Header from './Header'
import  './App.css'
import Router from './reactRouter'

import './playground/redux-cash-Tracker'


class App extends Component {

  render(){
    return (
      <div className="App">

      <Header />
         <Router />
     
      </div>
    );
  }
}

export default App;
