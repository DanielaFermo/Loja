 import React from "react";
 import styled  from "styled-components";

 export const CartContainer =styled.div`
 display: flex;
 flex-direction: column;
 height: 30vh;
 width: 80%;
 align-items: center;
/*  &:hover{
 background-color:green;
transition: 0.1s;
opacity: 0.3;

}
 */

 ` 

 export const ImgContainer = styled.img`
width: 50%;
&:hover{
    width: 100%;
    background-color: white;
    opacity: 1;

}
 `

 export const Button = styled.button`
 
&:hover,
&:focus {
    color:grey;
}


 `
