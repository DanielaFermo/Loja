import CardCarrinho from "../CardCarrinho/CardCarrinho"

import { CarrinhoContainer, ButtonRemove, ProdutoContainer } from "./styled-carrinho";

export default function Carrinho({cart , removeProduct ,valorTotal} ) {

  return (
    <CarrinhoContainer>
      <p>Carrinho:</p>
      <p>Total:{valorTotal()} </p>
      {
        cart.map((product,indice)=>{
          return<CardCarrinho product={product} removeProduct={removeProduct} key={indice}  ></CardCarrinho>
        })
      }



    </CarrinhoContainer>
  );
}
