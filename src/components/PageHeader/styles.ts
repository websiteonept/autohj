import styled from 'styled-components'

export const TopBar = styled.div`
    background: #1E1F23;  
    padding:5px 0;
    display:flex; 
    display: -webkit-flex;
    justify-content:center;
     
 filter: drop-shadow(0 0 0.7rem rgba(0,0,0,0.15));
`
export const MenuHeader = styled.div`
opacity:0.95;
 background: #1E1F23;  
    display:flex; 
  display: -webkit-flex;
    flex:1;
    width:100%;
    height:100%;

    position:absolute;
    z-index:9999; 
 
    flex-direction:column;
    
    padding:10px;
    
    .direita{
    display:flex;
    
  display: -webkit-flex;
    height:50px; 
    justify-content: flex-end; 

        button{
        background:none;
        border:none;
        color:#595959;
        
        transition:color 0.4s;
        
        transition:display 0.4s;

        :hover{ 
            color: ${props => props.theme.colors.primary}
        }
    } 
    }

    ul{
        display:flex;
        
  display: -webkit-flex;
        
        flex-direction:column;  
        align-items:center;
        justify-content: center;
       

    }
 
    li{
        padding:20px;
        display:flex;
        
  display: -webkit-flex;
        flex:1; 
        align-items:center;
        justify-content: center;
        
    }
    a{
    
      font-size:25px;
      color:#fff;
      text-decoration:none;
    }
    } 
`

export const PageHeaderDiv = styled.div`
    display:flex;
    
  display: -webkit-flex;
    align-items:center;
    justify-content:space-between;
    flex:1; 
    padding: 6px 20px;
    flex-direction:row;

 
   #esquerda{
       display:flex;
       
  display: -webkit-flex;
       min-width:50px;
 } 

      
    #direita 
    
    a{
      & + a{
          margin-left:10px;
      }
        text-decoration:none;
        color:#fff;
        
        align-items: center;

        
    }

    #direita .portal{
        border: 1px solid rgb(27,157,183);
box-sizing: border-box;
border-radius: 8px;
padding:10px;
color:rgb(27,157,183);
    }
     

    #direita  .marginLeft{
     margin-left:100px;
   }

    #direita .iconBlue{
        color:rgb(27,157,183);
    }

    #centro{ 
        justify-content:center;
        display:flex;
        
  display: -webkit-flex;
        flex:1;  
    }
   
    button{
        background:none;
        border:none;
        color:#595959;
        transition:color 0.4s;

        :hover{
            color: ${props => props.theme.colors.primary}
        }
    }
    #mobile {
            display:none;
            padding-right:10px;       
        }

    #mobile :hover{
        color:#ed1c24;
        }

    @media (max-width:960px){
        #mobile {
            display:block;
        }
        .desktop{
            display:none;
        }
    }

      
`
