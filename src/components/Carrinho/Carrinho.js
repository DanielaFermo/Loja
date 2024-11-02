import { CarrinhoContainer, ButtonRemove, ProdutoContainer } from "./styled-carrinho";

export default function Carrinho() {
  return (
    <CarrinhoContainer>
      <p>Carrinho:</p>
      <ProdutoContainer>
        <p>Produto 1</p>
        <ButtonRemove>Remover</ButtonRemove>
      </ProdutoContainer>
      <ProdutoContainer>
        <p>Produto 2</p>
        <ButtonRemove>Remover</ButtonRemove>
      </ProdutoContainer>      <ProdutoContainer>
        <p>Produto 3</p>
        <ButtonRemove>Remover</ButtonRemove>
      </ProdutoContainer>
    </CarrinhoContainer>
  );
}
