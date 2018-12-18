import styled from 'styled-components'

import { deviceMin } from '../../styled/device'
import { flexbox } from '../../styled/functions'
import { headerColor } from '../../styled/constants'
import { IcnButton } from '../../styled/styled.components'


export const FWrapper = styled.div`
      ${ flexbox({ 
         j: 'space-around'
      }) }
      position: fixed;
      bottom: 0px;
      width: 100%;
      background-color: ${headerColor};
      ${deviceMin.tablet`
            display: none
      `};
      
`
export const FButton = styled(IcnButton)`

`
