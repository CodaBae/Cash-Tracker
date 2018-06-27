import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Products from './Products'
import OtherP from './OtherP'
import Warning from './Warning'
import {Switch, Route} from 'react-router-dom'
import data from './Data'

class App extends Component {
  state={
    comments: data
   
  }
  render() {
    // console.log(this.state.comments.name)
    // console.log(this.state.comments1)
    // console.log(this.state.comments2)
    return (
      <div className="App">
      
          <img src={logo} className="App-logo" alt="logo" />
     
          <main>
            <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Products' component={Products} />
            <Route path='/OtherP' component={OtherP} />
            // <Route path='/*' component={Warning} />
            <Route path='/:id' render= { (props) =>  <Products data = {data} />} />
            </Switch>
           
          </main>

      </div>
    );
  }
}

export default App;
