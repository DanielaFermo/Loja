import Card from "./components/Card/Card";
import Carrinho from "./components/Carrinho/Carrinho";
import Filtro from "./components/Filtro/Filtro";
import Header from "./components/Header/Header";
import styled, { createGlobalStyle } from "styled-components";
import ShowProducts from "./components/ShowProducts/ShowPoducts";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;

}
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 3;
  max-width: 65vw;
  height: 100vh;
`;

function App() {
  const [nome, setNome] = useState("");
  const [valorMax, setValorMax] = useState("");
  const [valorMin, setValorMin] = useState("");

  const [ordem, setOrdem] = useState("");

  const [cart, setCart] = useState([]);
  console.log(cart);
  let soma = 0;

  const onChangeOrdem = (event) => {
    setOrdem(event.target.value);
  };

  const onChangeNome = (event) => {
    setNome(event.target.value);
  };
  const onChangeValorMax = (event) => {
    setValorMax(event.target.value);
  };
  const onChangeValorMin = (event) => {
    setValorMin(event.target.value);
  };

  const addToCart = (produto) => {
    //Existe esse produto no carrinho?
    const listaCompras = cart.find((item) => item.id === produto.id);
    console.log(listaCompras);

    if (listaCompras === undefined) {
      console.log("entrou");
      setCart([...cart, { ...produto, quantidade: 1 }]);
    } else {
      //Quando o produto ja existe , adicionar mais 1 á quantidade

      const ListaAlterada = cart.map((item) => {
        if (item.id === produto.id) {
          return {
            ...item,
            quantidade: item.quantidade + 1,
          };
        } else {
          return item;
        }
      });
      setCart(ListaAlterada);
    }
  };

  const removeProduct = (produto) => {
    if (produto.quantidade > 1) {
      const listaAlterada = cart.map((item) => {
        if (item.id === produto.id) {
          return {
            ...item,
            quantidade: item.quantidade - 1,
          };
        } else {
          return item;
        }
      });
      setCart(listaAlterada);
    } else {
      const listaAlterada = cart.filter((item) => {
        return item.id !== produto.id;
      });
      setCart(listaAlterada);
    }
  };

  // console.log(nome);
  //console.log(valorMax,valorMin);
  const valorTotal = () => {
    const valor = [];
    let valorFinal = 0;
    for (let element of cart) {
      valor.push(element.preco * element.quantidade);
    }
    for (let element of valor) {
      valorFinal += element 
    }
    return valorFinal
  };
  valorTotal();

  return (
    <>
      <GlobalStyled />
      <AppContainer>
        <Filtro
          nome={nome}
          onChangeNome={onChangeNome}
          valorMax={valorMax}
          valorMin={valorMin}
          onChangeValorMax={onChangeValorMax}
          onChangeValorMin={onChangeValorMin}
        />
        <MainContainer>
          <Header ordem={ordem} onChangeOrdem={onChangeOrdem} cart={cart} />
          <ShowProducts
            nome={nome}
            valorMax={valorMax}
            valorMin={valorMin}
            ordem={ordem}
            addToCart={addToCart}
          />
        </MainContainer>
        <Carrinho cart={cart} removeProduct={removeProduct} valorTotal={valorTotal} />
      </AppContainer>
    </>
  );
}

export default App;
