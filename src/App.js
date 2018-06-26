import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Products from './Products'
import OtherP from './OtherP'
import Warning from './Warning'
import {Switch, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      
          <img src={logo} className="App-logo" alt="logo" />
         
          <main>
            <Switch>
            <Route exact path='/Home' component={Home} />
            <Route path='/Products' component={Products} />
            <Route path='/OtherP' component={OtherP} />
            <Route path='/*' component={Warning} />
            </Switch>
           
          </main>

      </div>
    );
  }
}

export default App;
