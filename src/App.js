import React, { Component } from 'react';
import './App.css';
import { Products } from './Products/Products';
import {uniqueCatsArray, productCountObject, categoriesAndCountArray} from './data'

const categoryTotals = uniqueCatsArray.reduce((acc, category) => {
  return acc + categoriesAndCountArray[category], 0
})

console.log(categoryTotals)
class App extends Component {
  render() {
    return (
            <div className="products">
              <Products />
            </div>
    )
  }
}

export default App;
