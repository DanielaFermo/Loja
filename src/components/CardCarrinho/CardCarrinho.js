import { Button } from "./styled-CardCarrinho";
import {CardContainer, ValorContainer} from "./styled-CardCarrinho"

export default function CardCarrinho({ product ,removeProduct }) {
  return (
    <CardContainer>
      <p>{product.nome}</p>
<ValorContainer>
      <p>Preço: ${product.preco}</p>
      <p>Qtd: {product.quantidade}</p>
      <Button onClick={()=>removeProduct(product)}>X</Button>
</ValorContainer>
      
    </CardContainer>
  );
}
