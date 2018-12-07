import styled from 'styled-components'


export const Button = styled.button.attrs({
   type: props => props.button ? 'button' : 'submit'
})`
   margin: ${props => props.margin};
   padding: ${props => props.padding};
`
export const IcnButton = styled(Button)`
   width: 40px;
   height: 40px;
   padding: 8px;
`
export const AvButton = styled(Button)`
   width: 60px;
   height: 40px;
   color: transparent;
   padding: 1px 6px;
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