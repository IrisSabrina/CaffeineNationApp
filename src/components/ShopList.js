///////////////
// DEPENDENCY
///////////////
import React, { Component } from 'react'
import Shop from './Shop';

class ShopList extends Component {
  render() {
    return (
      <div className="shop-list">
        <h1>Hit up these places when you're in town!</h1>
        {this.props.shopsArray.map((shop, index) => {
          return(
            <Shop
            key={index}
            shop={shop}
            handleDelete={this.props.handleDelete}
            arrayIndex={index}
            handleCheck={this.props.handleCheck}
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
