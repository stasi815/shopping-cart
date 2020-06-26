import React, { Component } from 'react';
import { CategoryButton } from '../Button/category-button';
import { productCountObject } from '../data';
import './Buttons.css'


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
          return <CategoryButton
                    key={cat}
                    className={this.state.active === cat ? 'active' : ''}
                    onClick={() => this.handleClick(cat)}
                    category={cat}/>
        })

        return (
            <div className='buttons-div'>
            {categoryButtons}
            </div>)
      }
}

export {Buttons}