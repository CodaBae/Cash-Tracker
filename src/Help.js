import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Help extends Component {

  render(){
    return (
      <div className="App">
      help page
<Link to='/'> go home</Link>
      </div>
    );
  }
}

export default Help;
