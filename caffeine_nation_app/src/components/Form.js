///////////////
// DEPENDENCY
///////////////
import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
      this.state = {
        name: '',
        location: ''
      }
  }

  ///////////////
  // HANDLERS
  ///////////////

  handleChange = (event) => {
    // console.log('inside handle change');
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleCreateShop(this.state)
    this.clearForm()
  }

  clearForm = () => {
    this.setState({
      name: ''
    })
  }

  ///////////////
  // RENDER
  ///////////////
  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="coffee shop name"
            onChange={this.handleChange}
            value={this.state.name}
            id="name"
          />
          <input
            type="text"
            placeholder="city"
            onChange={this.handleChange}
            value={this.state.location}
            id="location"
          />
          <input
            type="text"
            placeholder="specialty drink name"
            onChange={this.handleChange}
            value={this.state.drink}
            id="drink"
          />
          <button
            type="submit">
            Submit a New Shop!
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
