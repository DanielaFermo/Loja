import { CartContainer, ImgContainer } from "./styled-card";


export default function Card ({produto}) {
   
    return(
        <CartContainer>
        <ImgContainer src={produto.image}/>
        <p>{produto.nome}</p>
        <p>${produto.preco}</p>
        <button>Adicionar ao Carrinho</button>
        </CartContainer>
    )
}

