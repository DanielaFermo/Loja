import  styled from "styled-components";

export const CardContainer =styled.div`
height:auto;
width: 15vw;
border:1px solid black;
margin: 2% 0;
padding: 2%;
display: flex;
flex-direction: column;
justify-content: center;
&:hover{
 background-color:green;
transition: 0.1s;
opacity: 0.3;

}

`


export const ValorContainer = styled.div`
display: flex;
justify-content:space-between;
padding: 0 2%;
`

export const Button = styled.button`
 
&:hover,
&:focus {
    color:grey;
}

`


