import React from 'react'

import { LHWrapper, Logo } from './LeftHeader.styles'
import { MenuIcon } from '../../../styled/icons'
import { BurButton } from './LeftHeader.styles'
import  logo  from '../../../images/yt_logo_rgb_dark.png'


const LeftHeader = () =>{

   return(
      <LHWrapper>
         <BurButton margin ='0 4px 0 0'>
            <MenuIcon />
         </BurButton>
         <Logo src={logo} alt= 'logo'/>
      </LHWrapper>
   )
}

export default LeftHeader