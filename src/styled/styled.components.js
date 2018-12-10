import styled from 'styled-components'

import { flexbox } from '../styled/functions'
import { headerColor } from '../styled/constants'


export const Button = styled.button.attrs({
   type: props => props.submit ? 'submit' : 'button'
})`
      margin: ${props => props.margin};
      padding: ${props => props.padding};
`
export const IcnButton = styled(Button)`
      width: 40px;
      height: 40px;
      padding: 8px;
`

export const HWrapper = styled.div`
      ${ flexbox({j:'flex-start' }) }
      position: fixed;
      width: 100%;
      background-color: ${headerColor};
      height: 56px;
      z-index: 20;
      padding: 0 8px 0 8px;
`
export const Input = styled.input`
      font-weight: 400;
      line-height: 24px;
      margin-left: 4px;
      max-width: 100%;
      outline: none;
      text-align: inherit;
      width: 100%;
      background-color: transparent;
      font-family: inherit;
      color: white;
      font-size: inherit;
      border: none;
`
export const Form = styled.form`
      ${ flexbox({ }) }

`
// export const Wrapper = styled.div`
//    ${ flexbox({ }) }
// `


// background: ${props => props.primary ? "palevioletred" : "white"};
// const Input = styled.input.attrs({
//    // we can define static props
//    type: "password",

//    // or we can define dynamic ones
//    margin: props => props.size || "1em",
//    padding: props => props.size || "1em"
//  })`
//    color: palevioletred;
//    font-size: 1em;
//    border: 2px solid palevioletred;
//    border-radius: 3px;

//    /* here we use the dynamically computed props */
//    margin: ${props => props.margin};
//    padding: ${props => props.padding};
//  `;

//  render(
//    <div>
//      <Input placeholder="A small text input" size="1em" />
//      <br />
//      <Input placeholder="A bigger text input" size="2em" />
//    </div>
//  );