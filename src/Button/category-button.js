import React, {Component} from 'react';
import './category-buttons.css';

class CategoryButton extends Component {
    render() {
        return <button onClick={this.props.onClick}>{this.props.category}</button>
    }
}

export {CategoryButton}