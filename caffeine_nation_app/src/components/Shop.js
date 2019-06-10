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
      </div>
    )
  }
}

///////////////
// EXPORT
///////////////
export default Shop;
