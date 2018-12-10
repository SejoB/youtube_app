import React, { Component } from 'react';


import GlobalStyle from '../../styled/global.styles'
import { AppWrapper }  from './styles'

import MainHeader from '../Header/MainHeader/MainHeader';



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
      <React.Fragment>
        <AppWrapper>
          <MainHeader />
          {/* <p>
          {this.state.msg}
          </p> */}
        </AppWrapper>
        <GlobalStyle />
      </React.Fragment>
    )
  }
}



export default App;
