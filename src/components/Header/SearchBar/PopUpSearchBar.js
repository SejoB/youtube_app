import React from 'react'

import SearchForm from '../SearchForm/SearchForm'
import { Container } from './PopUpSearchBar.styles'
import { BackIcon } from '../../../styled/icons'
import { IcnButton } from '../../../styled/styled.components'

const   PopUpSearchBar = ( props ) => {
      
   
      

   return(
      <Container>
         <IcnButton onClick={props.hidePopUpSBHandler} 
                     margin='0 8px 0 0' >
            <BackIcon/>
         </IcnButton>
         <SearchForm />
      </Container>
   )
      
   }


export default PopUpSearchBar