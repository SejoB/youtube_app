import styled from 'styled-components'

import { flexbox } from '../../../styled/functions'
import { BGcolor, borderColor, searchBtnColor, highLight } from '../../../styled/constants'
import { IcnButton, Form } from '../../../styled/styled.components'
import { SearchIcon } from '../../../styled/icons'



export const SForm = styled(Form)`
      max-width: 655px;
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 0.000000001px;
`

const blue = highLight
export const IWrapper = styled.div`
      ${ flexbox({ })}
      height: 32px;
      width: 100%;
      background-color: ${BGcolor};
      border-radius: 2px 0 0 2px;
      padding: 2px 6px;
      border: 1px solid ${borderColor};
      border-color: ${props=>props.stateColor ? blue : null };
`
export const SearchBtn = styled(IcnButton)`
      width: 65px;
      height: 32px;
      border: 1px solid ${borderColor};
      padding: 1px 6px;
      border-radius: 0 2px 2px 0;
      background-color: ${searchBtnColor};
      flex: none;
      border-left: none;
`
export const SearchIcn = styled(SearchIcon)`
      width: 20px;
      height: 20px;
      opacity: 0.4;
      background-color: transparent;
`
