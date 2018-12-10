import React, { Component } from 'react'

import SearchForm from '../SearchForm/SearchForm'
import { Container } from './styles'
import { BackIcon } from '../../../styled/icons'
import { IcnButton } from '../../../styled/styled.components'

class SearchBar extends Component {
   
   
   render() {
      return(
         <Container>
            <IcnButton margin='0 8px 0 0' >
               <BackIcon/>
            </IcnButton>
            <SearchForm />
         </Container>
      )
   }
} 

export default SearchBar