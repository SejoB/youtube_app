import styled from 'styled-components'

import { deviceMax } from '../../../styled/device'
import { flexbox } from '../../../styled/functions'
import { IcnButton } from '../../../styled/styled.components'

export const LHWrapper = styled.div`
${ flexbox({ }) }
`
export const Logo = styled.img`
      width: 5rem;
      height: 1.125rem;
      margin-right: 2.25rem;
      display: flex;
      cursor: pointer;
      ${deviceMax.tablet`
            margin-left: 0.875rem;
      `}; 
`
export const BurButton = styled(IcnButton)`
      ${deviceMax.tablet`
            display: none;
      `};
`

