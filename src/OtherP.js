import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Products extends Component {
    render() {
      return (
        <div className="Home">
            <h1>My Products Page</h1>
            <ul>
                <li>Bra</li>
                <li>Hat</li>
                <li>Bags</li>
                <li>Pants</li>
                <li>Shoes</li>
                <li>Purse</li>
                <li>Makeup</li>
                <li>Bangles</li>
                <li>Clothes</li>
            </ul>
            <Link to='/Home'>
                <button> Take Me Home </button> 
            </Link> 
        </div>
      );
    }
  }
  
  export default Products;
  