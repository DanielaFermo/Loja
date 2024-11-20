import { Button, CartContainer, ImgContainer } from "./styled-card";


export default function Card ({produto, addToCart}) {


    return(
        <CartContainer>
        <ImgContainer src={produto.image}/>
        <p>{produto.nome}</p>
        <p>${produto.preco}</p>
        <Button onClick={()=>addToCart(produto)} >Adicionar ao Carrinho</Button>
        </CartContainer>
    )
}

