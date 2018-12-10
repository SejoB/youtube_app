import styled from 'styled-components'

import { flexbox } from '../../../styled/functions'
import { Button } from '../../../styled/styled.components'




export const AvButton = styled(Button)`
   width: 60px;
   height: 40px;
   color: transparent;
   padding: 1px 6px;
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