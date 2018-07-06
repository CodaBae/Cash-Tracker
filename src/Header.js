import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class Help extends Component {

  render(){
    return (
      <div className="App">
     <h1>Cash Tracker</h1>
     <br />
     
   <br />
   <NavLink to='/'  activeClassName='is-active' exact={true} >Home</NavLink><br />

   <NavLink to='/AddExpense' activeClassName='is-active'>Add your expenses</NavLink><br />
   <NavLink to='/Help' activeClassName='is-active'>Help</NavLink>
      </div>
    );
  }
}

export default Help;
