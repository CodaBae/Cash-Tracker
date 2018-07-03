import React, { Component } from 'react';
import  EditExpense from './EditExpense'
import Help from './Help'
import W4o4 from './404'
import AddExpensePage from './AddExpensePage'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'

class Router extends Component {

  render(){
    return (
      <div className="App">
      
      <main>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/AddExpense' component={AddExpensePage} />
      <Route path='/Edit' component={EditExpense} />
      <Route path='/Help' component={Help} />
      <Route path='/*' component={W4o4} />
     
      </Switch>
     
    </main>


      </div>
    );
  }
}

export default Router;
