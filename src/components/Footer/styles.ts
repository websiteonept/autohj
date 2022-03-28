import styled from 'styled-components'

export const TopBar = styled.div`
    background: #1E1F23;  
    padding:5px 0; 
    display:flex;
    justify-content:center;
     
 filter: drop-shadow(0 0 0.7rem rgba(0,0,0,0.15));

` 

export const TopBarFooter = styled.div`
    background: ${props => props.theme.colors.primary};
    color: #1E1F23; 
    padding:5px 0;
    margin-top:20px;
    display:flex;
    justify-content:center;
    align-items:center;
 filter: drop-shadow(0 0 0.7rem rgba(0,0,0,0.15));

 h3{ 
    display:flex;
    justify-content:center;
    align-items:center;
 }

` 
export const FooterDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex:1; 
    padding: 6px 15px;
    flex-direction:row;

  

    .centro{ 
        justify-items:center;
        align-items:center;
        display:flex;
        flex:1; 
        flex-direction:column;

        p{
            
    color:#C8C1C1;
            font-size:14px;
        }
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
 

      
`

 

