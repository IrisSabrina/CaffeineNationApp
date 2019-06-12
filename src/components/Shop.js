///////////////
// DEPENDENCY
///////////////

import React, { Component } from 'react'

class Shop extends Component {
  render() {
    return (
      <div>
        <h2>{ this.props.shop.name } </h2>
        <h4>{`Located in ${ this.props.shop.location } and makes the best ${ this.props.shop.drink }s. `}</h4>
        <input
          id="checkbox"
          type="checkbox"
          onClick={() => {this.props.handleCheck(this.props.shop, this.props.arrayIndex)}}>
        </input>
        <button
        onClick={() => { this.props.handleDelete(this.props.shop.id, this.props.arrayIndex, this.props.currentArray)}}>DELETE</button>
      </div>
    )
  }
}

///////////////
// EXPORT
///////////////
export default Shop;
