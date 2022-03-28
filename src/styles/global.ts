import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

button{
  cursor: pointer;
  cursor: hand;
}

:-moz-any-link:focus {
  outline: none;
}
* {
	outline: none;
}

::placeholder {
  color: ${props => props.theme.colors.textAlternative};
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
 color: ${props => props.theme.colors.textAlternative};
}

::-ms-input-placeholder { /* Microsoft Edge */
 color: ${props => props.theme.colors.textAlternative};
}


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    max-width: 100%;
    overflow-x: hidden;
}




  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }

  .block_container{ 
    
        max-width:1100px;
        display:flex;  
        flex:1;
        flex-wrap:wrap; 
    }

/* width */
*::-webkit-scrollbar {
  width: 10px;
}

/* Track */
*::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
*::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
*::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
 
`
