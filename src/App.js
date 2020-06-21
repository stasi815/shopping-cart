import React, {Component} from 'react';
import './App.css';
import data, {uniqueCatsArray, productCountObject, categoriesAndCountArray} from './data';


console.log(uniqueCatsArray)
console.log(productCountObject)
console.log(categoriesAndCountArray)

class App extends Component {
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
      const {name, price, category} = product;
      return (
        <div className="individual-prods">
          <h1>{name}</h1>
          <div>{price}</div>
          <div>{category}</div>
        </div>
      )
    })
    return productInfo
  }

  render() {
    const filteredProducts = this.displayInventoryByCategory()
    return (
      <div>
        <div className="button-div">
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

class Buttons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCategory: null
    }

  }

  handleClick(category) {
    this.props.setCategory(category)

  }

  render() {
    const categoryList = Object.keys(productCountObject)
    const categoryButtons = categoryList.map((cat) => {
      return <button key={cat} onClick={() => this.handleClick(cat)}>{cat}</button>
    })

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap",}}>
        {categoryButtons}
        </div>)
  }

}

export default App;
