import styled from 'styled-components'

 
export const NotFound404 = styled.div`
display:flex;
flex-direction:column;

a{
  text-decoration:none;
  display:flex;
    justify-content:center;
    width:100%;
    flex:1;

    margin-top:5px;
    padding:10px;

    transition: background-image 0.2s;
    
    background-color: ${props => props.theme.colors.primary};
    color:#fff;

    cursor: pointer;
    cursor: hand;

    border-radius:8px;
    border:0px;

    font-weight:bold;
    font-size:15px;

    :hover{
      background-color: ${props => props.theme.colors.primaryShade};
    }
   }
 
 
`
 
 