///////////////
// DEPENDENCY
///////////////
import React, { Component } from 'react'

class App extends Component {

  // run one time only lifecycle method...
  componentDidMount() {
     this.fetchTasks()
  }
  
  ///////////////
  // RENDER
  ///////////////
  render() {
    return (
      <div className="main-container">
      <h1> Welcome to the Best of Caffeine-Nation</h1>
      </div>
    )
  }
}

///////////////
// EXPORT
///////////////
export default App;
