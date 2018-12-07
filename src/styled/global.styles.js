   import 'styled-components'
   import { createGlobalStyle } from 'styled-components'

   

   const GlobalStyle = createGlobalStyle`
   html, body, #root {
      padding: 0px;
      margin: 0px;
      height: 100%;
      font-size: 16px;
   }

   html {
      font-family: 'Roboto', Arial, sans-serif;
      text-decoration: none;
   }

   * {
      margin: 0;
      padding: 0;
      border:none;
      outline:none;
      box-sizing: border-box;
   }

   button {
      text-decoration: none;
      border: none;
      -webkit-appearance: none;
      background-color: transparent;
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
