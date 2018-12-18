import React from 'react'

import { SBwrapper, SBHeader, GLine } from './SideBar.styles'
import { Logo } from '../Header/LeftHeader/LeftHeader.styles'
import { MenuIcon } from '../../styled/icons'
import { IcnButton } from '../../styled/styled.components'
import  logo  from '../../images/yt_logo_rgb_dark.png'

const SideBar = () => {

   return(
      
      <SBwrapper>
         <SBHeader>
            <IcnButton margin ='0 4px 0 0'>
               <MenuIcon />
            </IcnButton>
            <Logo src={logo} alt= 'logo'/>
         </SBHeader>
      </SBwrapper>
      
      
   )



}

export default SideBar