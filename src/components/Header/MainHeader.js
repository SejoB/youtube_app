import React from 'react'


import { AvButton, IcnButton } from '../../styled/styled.components'

import { HWrapper, LHWrapper, Logo} from './styles'
import logo from '../../../src/images/yt_logo_rgb_dark.png'
import { AddVideoIcon, MenuIcon, SearchIcon, AddUserIcon} from '../../styled/icons'


const MainHeader = () => {
   return(
      <HWrapper>
         <IcnButton margin ='0 4px 0 0'>
            <MenuIcon />
         </IcnButton>
         <Logo src={logo} alt= 'logo'/>
         <LHWrapper>
            <IcnButton>
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





export default  MainHeader 
