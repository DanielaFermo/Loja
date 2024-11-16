import {CardContainer, ValorContainer} from "./styled-CardCarrinho"

export default function CardCarrinho({ product ,removeProduct }) {
  return (
    <CardContainer>
      <p>{product.nome}</p>
<ValorContainer>
      <p>Preço: ${product.preco}</p>
      <p>Qtd: {product.quantidade}</p>
      <button onClick={()=>removeProduct(product)}>X</button>
</ValorContainer>
      
    </CardContainer>
  );
}
