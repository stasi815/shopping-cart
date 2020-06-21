import React, {Component} from 'react';

class CategoryButton extends Component {
    render() {
        return <button onClick={this.props.onClick}>{this.props.category}</button>
    }
}

export default CategoryButton