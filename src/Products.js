import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import data from './Data'

class Products extends Component {
    state = {
        ...this.props.data
    }
    render() {
        console.log(this.state)
      return (
        <div className="Home">
    
            <h1>My Products</h1>
            <p>{}</p>
                <ol>
                    {data.map((data) =><ol key={data.id}> {data.id} {data.name}</ol>)}
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
  