///////////////
// DEPENDENCY
///////////////
import React, { Component } from 'react'
import Shop from './Shop';

class ShopList extends Component {
  render() {
    return (
      <div className="shop-list">
        <h2>Current Best of Coffee Shops </h2>
        {this.props.shopsArray.map((shop, index) => {
          return(
            <Shop
            key={index}
            shop={shop}
            />
          )
        })}
      </div>
    )
  }
}

///////////////
// EXPORT
///////////////
export default ShopList;
