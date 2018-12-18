import React, { Component } from 'react'
import onClickOutside from "react-onclickoutside"

import { IWrapper, SearchBtn, SearchIcn, SForm } from './SearchForm.styles'
import { Input } from '../../../styled/styled.components'

class SearchForm extends Component {
   
   state = { stateColor: false }


   hasFocusHandler = () => {
      this.setState({stateColor: true})
   }
   handleClickOutside = () => {
      this.setState({stateColor: false})
   }
   
   
   render() {
      return(
            <SForm  onSubmit={(e)=>e.preventDefault()}>
               <IWrapper   stateColor={this.state.stateColor} onFocus={this.hasFocusHandler}>
                  <Input  id='searchInput' 
                          type='text' 
                          placeholder='Search'/>
               </IWrapper>
               <SearchBtn type='submit'>
                  <SearchIcn />
               </SearchBtn>
            </SForm>
      )
   }
} 

export default onClickOutside(SearchForm)