import styled from 'styled-components'

import { deviceMin } from '../../../styled/device'
import { flexbox } from '../../../styled/functions'
import { Button } from '../../../styled/styled.components'
import { headerColor } from '../../../styled/constants'



export const AvButton = styled(Button)`
   width: 3.75rem;
   height: 2.5rem;
   color: transparent;
   padding: 1px 6px;
`
export const RHWrapper = styled.div`
      ${ flexbox({ }) }
      margin-left: auto;

`
export const HWrapper = styled.div`
      ${ flexbox({j:'flex-start' }) }
      position: fixed;
      width: 100%;
      background-color: ${headerColor};
      height: 3.5rem;
      z-index: 20;
      padding: 0 0.5rem 0 0.5rem;
`
export const IcnSButton = styled(Button)`
      width: 2.5rem;
      height: 2.5rem;
      padding: 0.5rem;
      ${deviceMin.tablet`
            display: none
      `}
`