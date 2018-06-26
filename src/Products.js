import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Products extends Component {
    render() {
      return (
        <div className="Home">
        
            <h1>My Products</h1>
                <ol>
                    <li>Bags</li>
                    <li>Shoes</li>
                    <li>Purse</li>
                </ol>
            <Link to='/OtherP'>
                <button >  More Products </button> 
            </Link> 
            <Link to='/Home'>
            <button> Take Me Home </button> 
            </Link> 
        </div>
      );
    }
  }
  
  export default Products;
  