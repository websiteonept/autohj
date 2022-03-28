import styled from 'styled-components'

export const Esquerda = styled.div`
 
   max-width:700px;
   display:flex;
   flex-direction:column; 
   flex-wrap: wrap;

  img{
    border:0;
    border-radius:8px;
   }

  .containerImagemPrincipal,.imagemAtual{
    overflow:hidden;
    position:relative;
    width:100%;
    max-width:690px; 
   
  }

 
  
.ribbon {
  font-size:14px;
  margin: 0;
  padding: 0;
  background: #AA2B2B;
  color:white;
  padding:1em 0;
  position: absolute;
  top:0;
  right:0;
  transform: translateX(30%) translateY(0%) rotate(45deg);
  transform-origin: top left;
}
.ribbon:before,
.ribbon:after {
  content: '';
  position: absolute;
  top:0;
  margin: 0 -1px; /* tweak */
  width: 100%;
  height: 100%;
  background: #AA2B2B;
}
.ribbon:before {
  right:100%;
}

.ribbon:after {
  left:100%;
}

`

export const Direita = styled.div`

    display:flex;
    flex:1;
    flex-direction:column; 
    flex-wrap: wrap;
    padding:10px;

 .TabelaLateral{ 
   
  background-color:#1E1F23; 
  border:0;
  border-radius:8px;
  padding:10px;
  margin:3px;
   
  width:100%;
  border:2px ${props => props.theme.colors.primary} solid;
  display:flex; 
  
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

  *:focus {
    outline: none;
}
 
 

   input, textarea{
    
    font: 400 16px Roboto, sans-serif;
    resize: none;
    background-color:transparent;
    color:#C8C1C1;
    display:flex;
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

 .ContactButtons{
    background-color:#1E1F23;
    border-radius:8px;
    margin: 5px;
    border: 2px solid ${props => props.theme.colors.primary};

     padding:5px;
     display:flex;
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
export const Miniaturas = styled.div`

  
  position:relative;
  display: flex;
  display: -webkit-flex;
   
   
   flex-wrap: wrap;   
  -webkit-flex-wrap: wrap; 
   margin-top:5px; 
   justify-content:space-evenly;
     

  img{ 
    margin:3px;
    width:100%;
    height:100%;
    max-width:105px;
    max-height:105px;
    cursor: pointer;
    cursor: hand;
    border-bottom: 0; 
    border:2px solid #121114;
    transition: border 0.2s;
    transition: transform 0.2s;
  }

  img:hover{
      border:3px solid ${props => props.theme.colors.primary};
      transform:translateY(-4px);
    }
 
`
export const Loader = styled.div`
 
  border: 8px solid #1E1F23;
  border-radius: 50%;
  border-top: 8px solid ${props => props.theme.colors.primary};
  width: 40px;
  height: 40px;
  -webkit-animation: spin 1s linear infinite; /* Safari */
  animation: spin 1s linear infinite;


/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`

export const Center = styled.div`
display:flex;
width:100vw;
height:100vh;

justify-content:center;
align-items:center;
`