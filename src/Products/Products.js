import React, { Component } from 'react';
import data from '../data';
import { Buttons } from '../Buttons/Buttons';
import { Product } from '../Product/Product';
import './Products.css';

class Products extends Component {
    constructor(props){
        super(props)
        this.state = {
          currentCategory: null
        }
      }

      displayInventoryByCategory() {
        const productInfo = data.filter((item)=> {
          return item.category === this.state.currentCategory || this.state.currentCategory === null
        }).map((product) => {
          const {name, price, category, description} = product;
          return (
            <Product
                name={name}
                description={description}
                price={price}
                category={category}
            />
          )
        })
        return productInfo
      }

      render() {
        const filteredProducts = this.displayInventoryByCategory()
        return (
          <div>
            <div className="buttons-div">
              <Buttons setCategory={(cat) => this.setState({
                currentCategory: cat
                })}/>
                <button onClick={() => {
                console.log('all clicked')
                this.setState({
                currentCategory: null
              })}
              }>All Products</button>
            </div>
            <div className="products">{filteredProducts}</div>
          </div>
        )
      }
}

export {Products}