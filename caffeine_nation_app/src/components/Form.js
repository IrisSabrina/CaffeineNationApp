///////////////
// DEPENDENCY
///////////////
import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
      this.state = {
        shopListItem: ''
      }
  }

  ///////////////
  // HANDLERS
  ///////////////

  handleChange = (event) => {
    // console.log('inside handle change');
    this.setState({
      shopListItem: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleCreateShop(this.state)
    this.clearForm()
  }

  clearForm = () => {
    this.setState({
      shopListItem: ''
    })
  }

  ///////////////
  // RENDER
  ///////////////
  render() {
    return (
      <div
        onSubmit={this.handleSubmit}
      >
        <form>
          <input
            type="text"
            placeholder="coffee shop name"
            onChange={this.handleChange}
            value={this.state.shopListItem}
          />
          <button
            type="submit">
            Click
          </button>
        </form>
      </div>
    )
  }
}

///////////////
// EXPORT
///////////////
export default Form;
