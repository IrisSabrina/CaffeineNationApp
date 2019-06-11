///////////////
// DEPENDENCY
///////////////
import React, { Component } from 'react'
import ShopList from './components/ShopList';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        currentView: 'shoplist',
        shopsArray: []
      }
      ///////////////
      // BINDERS
      ///////////////
      this.fetchList = this.fetchList.bind(this);
      this.sortShops = this.sortShops.bind(this);
      this.setShops = this.setShops.bind(this);
      this.updateArray = this.updateArray.bind(this);
      this.handleCreateShop = this.handleCreateShop.bind(this);
      this.handleView = this.handleView.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.removeFromArray = this.removeFromArray.bind(this);
  }

  ///////////////
  // METHODS
  ///////////////

  handleCreateShop(shop) {
    console.log(shop);
  fetch('https://dry-dawn-74348.herokuapp.com/shops', {
    body:JSON.stringify(shop),
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  }).then( createdShop => createdShop.json()) //.json() is parsing JSON.parse()
    .then( jData => {
      console.log(jData);
      this.updateArray(jData, 'shopsArray')
      this.handleView('shopList')
    })
    .catch( err => console.log('this is an error', err))
}

  // updateArray( {shopListItem: 'new shop'}, 'shopList')
  updateArray(shop, array) {
    // prevState is a copy of state
    this.setState( prevState => {
      // prevState['shopList']
      prevState[array].push(shop)
      return {
        [array]: prevState[array]
      }
    })
  }

  handleCheck(shop, arrayIndex){
    console.log('this is handle check', shop, arrayIndex);
  }

  handleDelete(shopId, arrayIndex){
    console.log('this is delete', shopId, arrayIndex)
    fetch(`https://dry-dawn-74348.herokuapp.com/shops/${shopId}`, {
      method: 'DELETE'
    })
    .then(data => {
      this.removeFromArray('shopsArray', arrayIndex)
    }).catch( err => console.log('this is error from handleDelete', err))
  }

  removeFromArray(array, arrayIndex){
    console.log('this is array', array, arrayIndex);
    this.setState(prevState => {
      console.log('this is prevState array', prevState[array]);
      prevState[array].splice(arrayIndex, 1)
      return {
        [array]: prevState[array]
      }
    })
  }

  handleView(view) {
    // updating state causes a render
    this.setState({
      currentView: view
    })
  }

  fetchList () {
  fetch('https://dry-dawn-74348.herokuapp.com/shops')
 .then( data => data.json())
 .then( jData => {
   console.log('this is jData', jData)
   this.sortShops(jData)
 })
}

  sortShops(shops) {
    let shopsArray = []
    shops.forEach( shop => {
      shopsArray.push(shop)
    })
    this.setShops(shopsArray)
  }

  setShops(created) {
    this.setState({
      shopsArray: created
    })
  }


  // run one time only lifecycle method...
  componentDidMount() {
     this.fetchList()
  }

  ///////////////
  // RENDER
  ///////////////
  render() {
    return (
      <div className="main-container">
      <h1> Welcome to the Best of Caffeine-Nation</h1>
      <Form
        handleCreateShop={this.handleCreateShop}
      />
      <ShopList
        currentView={this.state.shoplist}
        shopsArray={this.state.shopsArray}
        handleDelete={this.handleDelete}
        handleCheck={this.handleCheck}
      />
      </div>
    )
  }
}

///////////////
// EXPORT
///////////////
export default App;
