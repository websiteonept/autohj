import styled  from 'styled-components'
export const Imagem = styled.div`
overflow: hidden; /* required */
 
  display:flex;
  flex:1;
  height:300px;
  background-size:cover;
  border:0;
  border-top-left-radius:6px;
  border-top-right-radius:6px;
  margin-bottom:5px;
 
    transition: background-image 0.4s;

`

export const   TwoCollumns = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
  margin: 0 10px;

  strong{
    font-size:20px;
    color:#D6872A;
  }

`

export const PostItemDiv = styled.div`
    overflow: hidden; 
    position: relative;
    display:flex;
    flex-direction:column;  
    min-width:300px;
    max-width:360px;
    flex:1;
    border-bottom: 0;
    background: #1E1F23;
    border:3px solid #121114;
    margin:8px;    
    border-radius:10px;
    padding:0;
    transition: border 0.2s;
    transition: transform 0.2s;

    a{
      text-decoration:none;
    }

    &&:hover{
      border:3px solid #D6872A;
      transform:translateY(-4px);
    }

    img{
      border:0;
      border-top-left-radius:6px;
      border-top-right-radius:6px;
      margin-bottom:5px;
      width:100%;
      height:120px;
   }

  
   
   .title{
    display:flex;
    justify-content:center;
    align-items: center;
    padding:10px;
    font-size: 16px; 
    
    color:#C8C1C1;
    min-height:60px;
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


  .date{
    font-size: 11px;
    line-height:25px;
    color: #777; 
    margin:10px; 
  }
 

`


   