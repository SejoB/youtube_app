import React, { Component } from 'react'
import onClickOutside from "react-onclickoutside"



import SearchBar from '../SearchBar/SearchBar'
import { HWrapper, IcnButton } from '../../../styled/styled.components'
import { LHWrapper, Logo, AvButton } from './styles'
import logo from '../../../images/yt_logo_rgb_dark.png'
import { AddVideoIcon, MenuIcon, SearchIcon, AddUserIcon} from '../../../styled/icons'

class MainHeader extends Component {
   
    state = {
      showSearchBar: false
    }

   showSearchBar = () => {
      console.log('click')
      this.setState({ showSearchBar: true })
   }
   handleClickOutside = (e) => {
      this.setState({ showSearchBar: false })
      console.log(e.target)
   }
   

   render(){
      return(
         <HWrapper>
            <IcnButton margin ='0 4px 0 0'>
               <MenuIcon />
            </IcnButton>
            <Logo src={logo} alt= 'logo'/>
            <React.Fragment>
               { this.state.showSearchBar ? <SearchBar /> : null }
            </React.Fragment>
            <LHWrapper>
               <IcnButton onClick={()=>this.showSearchBar()}>
                  <SearchIcon/>
               </IcnButton>
               <IcnButton>
                  <AddVideoIcon/>
               </IcnButton>
               <AvButton>
                  <AddUserIcon />
               </AvButton>
            </LHWrapper>
         </HWrapper>
      )
   }
}




export default  onClickOutside(MainHeader)
