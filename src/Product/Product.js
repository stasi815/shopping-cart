import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
  render() {
    return (
      <div className="individual-items">
        <h1>{this.props.name}</h1>
        <p>{this.props.description}</p>
        <p>Price: {this.props.price}</p>
        <p>Category: {this.props.category}</p>
      </div>
    )
  }
}

export {Product}