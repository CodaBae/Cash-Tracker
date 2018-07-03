import React, { Component } from 'react';
import AddExpensePage from './AddExpensePage'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import  EditExpense from './EditExpense'
import Help from './Help'


class App extends Component {

  render(){
    return (
      <div className="App">
      
         
          <main>
            <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/AddExpensePage' component={AddExpensePage} />
            <Route path='/EditExpense' component={EditExpense} />
            <Route path='/Help' component={Help} />
           
            </Switch>
           
          </main>

      </div>
    );
  }
}

export default App;
