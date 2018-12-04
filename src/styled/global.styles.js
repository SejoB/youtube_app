   import 'styled-components'
   import { createGlobalStyle } from 'styled-components'


   const GlobalStyle = createGlobalStyle`
   body {
      background-color: #000000;
      text-decoration: none;
      padding: 0px;
      margin: 0px;
      font-family: 'Roboto', Arial, sans-serif;
   }

   button {
      text-decoration: none;
      border: none;
   }

   span, a, ul, li, div {
      text-decoration: none;
      list-style-type: none; 
   }

   input:focus,
   input,
   select:focus,
   textarea:focus,
   button:focus,
   button,
   textarea {
      outline: none;
      border: none; 
   }
   
   button {
   cursor: pointer; 
   }
   `

   export default GlobalStyle
