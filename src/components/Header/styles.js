import styled from 'styled-components'

import { lightBlackColor }  from '../../styled/constants'
import { flexbox } from '../../styled/functions'


export const HWrapper = styled.div`
      ${ flexbox({j:'flex-start' }) }
      position: fixed;
      width: 100%;
      background-color: ${lightBlackColor};
      height: 56px;
      z-index: 20;
      padding: 0 8px 0 8px;
      
`
export const LHWrapper = styled.div`
      ${ flexbox({ }) }
      margin-left: auto;

`
export const Logo = styled.img`
      width: 80px;
      height: 18px;
      display: flex;
      cursor: pointer; 
`