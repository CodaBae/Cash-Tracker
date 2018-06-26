import React, { Component } from 'react';
import {Link} from  'react-router-dom'
class Home extends Component {
    render() {
      return (
        <div className="Home">
            <h1>Welcome to my Home Page Hahahahaha</h1>
        
            <Link to='/Products'>
                <button >  Take me to Products </button> 
            </Link> 
        </div>
      );
    }
  }
  
  export default Home;
  