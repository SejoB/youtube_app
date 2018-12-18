import styled from 'styled-components'

import {flexbox} from '../../styled/functions'

import {sideBarBG, hoverColor } from '../../styled/constants'
// import { LHWrapper } from '../Header/LeftHeader/LeftHeader.styles';


export const SBwrapper = styled.div`
      ${ flexbox({
            d: 'column',
            j: 'flex-start',

       })};
      position: absolute;
      height: 50%;
      width: 15rem;
      top: 0rem;
      left: 0rem;
      background-color: ${sideBarBG};
      z-index: 99;


`
export const SBHeader = styled.div`
      ${ flexbox({})}
      margin-right: auto;
      padding-left: 0.5rem;
      height: 3.5rem;
      border-bottom: 1px solid ${hoverColor}

`
export const GLine = styled.div`
       border-top: 1px solid white
      
`
