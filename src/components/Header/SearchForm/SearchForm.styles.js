import styled from 'styled-components'

import { deviceMax } from '../../../styled/device'
import { flexbox } from '../../../styled/functions'
import { BGcolor, borderColor, searchBtnColor, highLight } from '../../../styled/constants'
import { IcnButton, Form } from '../../../styled/styled.components'
import { SearchIcon } from '../../../styled/icons'

export const SForm = styled(Form)`
      max-width: 41rem;
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 0.000000001px;
      min-width: 8.45rem;
      ${deviceMax.tablet`
            display: none
      `}
`

const blue = highLight
export const IWrapper = styled.div`
      ${ flexbox({ })}
      height: 2rem;
      width: 100%;
      background-color: ${BGcolor};
      border-radius: 0.125rem 0 0 0.125rem;
      padding:  0.125rem 0.375rem 0.125rem 0.375rem;
      border: 1px solid ${borderColor};
      border-color: ${props=>props.stateColor ? blue : null };
      :hover{
            border-color: ${highLight}
      }
`
export const SearchBtn = styled(IcnButton)`
      width: 4rem;
      height: 2rem;
      border: 1px solid ${borderColor};
      padding: 0.0625rem 0.375rem;
      border-radius: 0 0.125rem 0.125rem 0;
      background-color: ${searchBtnColor};
      flex: none;
      border-left: none;
`
export const SearchIcn = styled(SearchIcon)`
      width: 1.25rem;
      height: 1.25rem;
      opacity: 0.4;
      background-color: transparent;
`
