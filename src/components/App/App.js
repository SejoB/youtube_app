import React, { Component } from 'react';


import GlobalStyle from '../../styled/global.styles'
import { AppWrapper }  from './App.styles'

import MainHeader from '../Header/MainHeader/MainHeader'
import SideBar from '../SideBar/SideBar'
import Footer from '../Footer/Footer'



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
          {/* <SideBar/> */}
          {/* <p>
          {this.state.msg}
          </p> */}
          <Footer/>
        </AppWrapper>
        <GlobalStyle />
      </React.Fragment>
    )
  }
}



export default App;
