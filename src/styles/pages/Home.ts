import styled from 'styled-components'

export const Container = styled.div`
  
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  flex:1;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`



export const InnerContainer = styled.div`
        margin:10px;
        display: flex;
        display: -webkit-flex;
        justify-items:center;
        justify-content:center;
        align-items: center;
        
     span {
      font-size: 20px;
      color: #85868c;
    }
    
    .block {
      width:100%;
     text-align:center;
    }
   
     `


export const TreeColumns = styled.div`
        flex-wrap: wrap;
        margin:10px;
        display: flex;
        display: -webkit-flex;
        justify-items:center; 
        justify-content:center; 
        align-items: center;
        width:100%;
        max-width:1200px;
     
     `


interface FormsProps {
    hasError: boolean;
}

export const Title = styled.h1`
@media (max-width:600px){
    font-size:30px;
    line-height:35px;
    margin-top:25px;
}
font-size:48px;
color: #3a3a3a;
margin-top:40px;
max-width:450px;
line-height:56px;
`

export const NotFound404 = styled.div`

`
 
 