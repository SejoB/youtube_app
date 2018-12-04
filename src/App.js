import React, { Component } from 'react';

class App extends Component {
  state = {
    msg: "temp msg"
  }

  async componentDidMount(){
    const response = await fetch('/api/hello')
    const data = await response.text()
    this.setState({msg:data});
  } 

  render() {
    return (
      <div className="App">
          <p>
          {this.state.msg}
          </p>
      </div>
    );
  }
}

export default App;
