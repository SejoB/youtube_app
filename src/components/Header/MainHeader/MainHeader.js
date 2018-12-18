import React, { Component } from 'react'
import onClickOutside from "react-onclickoutside"

import PopUpSearchBar from '../SearchBar/PopUpSearchBar'

import { IcnButton } from '../../../styled/styled.components'
import { HWrapper, RHWrapper, AvButton, IcnSButton } from './MainHeader.styles'
import { AddVideoIcon, SearchIcon, AddUserIcon} from '../../../styled/icons'
import SearchForm from '../SearchForm/SearchForm'
import LeftHeader from '../LeftHeader/LeftHeader'


class MainHeader extends Component {
   
      
   
   
   state = {
   showSBar: false,
   showSForm: false
   }


   hidePopUpSBHandler = (e) => {
      this.setState({showSBar: false})
      console.log('hideBar', e.target)
   }  
   showPopUpSBHandler = (e) => {
      this.setState({ showSBar: true})
      console.log('showBaropen', e.target)
   }
   // handleClickOutside = (e) => {
   //    this.setState({ showSBar: false })
   //    console.log(e.target)
   // }
   renderPopUpSB=()=>{
      let showSBar = this.state.showSBar === true
      if (showSBar === true ) {
         return <PopUpSearchBar  showPopUpSBHandler={this.showPopUpSBHandler} 
                                 hidePopUpSBHandler={this.hidePopUpSBHandler}/>
      }else {
         return null
      }
   }


   // showSFHandler = (mq) => {
   // //   mq = window.matchMedia('(min-width: 460px)')
   //    if(mq.matches){
   //       this.setState({ showSForm: true })
   //       console.log( 'SFormOpen')
   //    }else {this.setState({showSForm: false})
   //       console.log( 'SFormClosed')}
   //    // mq.addListener(this.showSFHandler)

   // }
   // renderSearchForm = () => {
   //    let showSForm = this.state.showSForm
   //    if (showSForm === true) {
   //        return <SearchForm showSFHandler={this.showSFHandler}/>
   //       }else {
   //        return null
   //       }
   //    }
   
      
   

   
      
   
   
   
   render(){
      
      return(
         <HWrapper>
            <LeftHeader/>
            <React.Fragment>
               {this.renderPopUpSB()}                        
            </React.Fragment>
            <SearchForm/>
            <RHWrapper>
               <IcnSButton onClick={this.showPopUpSBHandler}>
                  <SearchIcon/>
               </IcnSButton>
               <IcnButton>
                  <AddVideoIcon/>
               </IcnButton>
               <AvButton>
                  <AddUserIcon />
               </AvButton>
            </RHWrapper>
         </HWrapper>
      )
   }
}


export default  onClickOutside(MainHeader)
