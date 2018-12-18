import React from 'react'
import { FWrapper } from './Footer.styles'
import { HomeIcn, SubIcn } from '../../styled/icons'
import { IcnButton } from '../../styled/styled.components'
const Footer = () => {
      return(
         <FWrapper>
            <IcnButton>
               <HomeIcn/>
            </IcnButton>
            <IcnButton>
               <SubIcn/>   
            </IcnButton>
         </FWrapper>
      )
}

export default Footer