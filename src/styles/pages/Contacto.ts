import styled from 'styled-components'
  
export const InnerContainer = styled.div`

display:flex;
display: -webkit-flex;
flex:1; 
flex-direction:column;
justify-content:center;
align-items:center;
justify-items:center;
padding:15px;
 

     span {
      font-size: 20px;
      color: #85868c;
    }
    
    .block {
      display:flex;
      display: -webkit-flex;
flex:1; 
justify-items:center;
justify-content:center;
align-items:center; 
    } `
 


export const Direita = styled.div`

    display:flex;
    display: -webkit-flex;
    flex:1; 
    flex-direction:column; 
    flex-wrap: wrap;
    padding:0px;
    
  

 .TabelaLateral{ 
   
  background-color:#1E1F23; 
  border:0;
  border-radius:8px;
  padding:10px;
  margin:3px; 
  border:2px ${props => props.theme.colors.primary} solid;
  display:flex; 
  display: -webkit-flex;
  
  flex-direction:column;
  


  h2{
      color: ${props => props.theme.colors.primary};
    }

  ul{
    list-style: none;
    padding-top:10px;
  }

  li{
    font-size:16px;
    display:flex;
    display: -webkit-flex;
    justify-content:space-between;
    padding: 2px 10px;
    color: ${props => props.theme.colors.primary};

    strong{
      color: #C8C1C1;
    }
  }

  li+li{
    border-top:#C8C1C1 1px solid;
  }

 }


 .contact_form{


  min-width:280px;

  *:focus {
    outline: none;
}  

input, textarea{
    
    font: 400 16px Roboto, sans-serif;
    resize: none;
    background-color:transparent;
    color:#C8C1C1;
    display:flex;
    display: -webkit-flex;
    width:100%;
    flex:1;
    border:2px solid ${props => props.theme.colors.primary};
    border-radius:8px;
    padding:10px;
    margin-top:5px;
    
    font-size:14px;
   }

   button{
    display:flex;
    justify-content:center;
    width:100%;
    min-width:280px;
    flex:1;

    margin-top:5px;
    padding:10px;

    transition: background-image 0.2s;
    
    background-color: ${props => props.theme.colors.primary};
    color:#1E1F23;

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

   
 }

 .twocolumns{
  display:flex;
  display: -webkit-flex;
  align-items:center;
  justify-content:center;
  flex-direction:row;
  flex-wrap:wrap;
  

 }

 .ContactButtons{
    background-color:#1E1F23;
    border-radius:8px; 
    margin:5px;
    border: 2px solid ${props => props.theme.colors.primary};

     padding:5px;
     display:flex;
     flex:1;
     min-width:320px;    
     align-items:center;
     justify-content:center;
     span{
      font-size:28px;
     color:#C8C1C1;
     }
     a{
     margin:0 5px;
    
       font-size:19px;
       font-weight:bold;
       color:#C8C1C1;
       text-decoration:none;
       padding:10px; 
      display:flex;
      align-items:center;
      justify-content:center;
      border-radius:8px;
      transition:background-color 0.2s;
     }
    

     .PhoneButton{
      color:${props => props.theme.colors.background};
      background-color:${props => props.theme.colors.primary};
      :hover{
        color:${props => props.theme.colors.backgroundSecondary};
        background-color:${props => props.theme.colors.primaryShade};
      }
     }

     .WhatsappButton{
      color:#fff;
      background-color:#25d366;
      :hover{
        color:#fff;
        background-color:#128c7e;
      }
       
       
     }
   }
 
 `