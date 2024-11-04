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
  max-width: 75vw;
  height: 100vh;
  background-color: aqua;
`;



function App() {

  const [nome , setNome]=useState("")
  const[valorMax , setValorMax]=useState("")
  const[valorMin , setValorMin]=useState("")

  const onChangeNome = ( event) => {
    setNome (event.target.value)
  }
  const onChangeValorMax=(event) => {
    setValorMax(event.target.value)
  }
  const onChangeValorMin =(event)=>{
    setValorMin(event.target.value)
  }

  console.log(nome);
  console.log(valorMax,valorMin);

  return (
    <>
      <GlobalStyled />
      <AppContainer>
        <Filtro nome={nome} onChangeNome={onChangeNome} valorMax={valorMax} valorMin={valorMin} onChangeValorMax={onChangeValorMax} onChangeValorMin={onChangeValorMin}/>
        <MainContainer>
          <Header />
          <ShowProducts nome={nome} valorMax={valorMax} valorMin={valorMin}/>
        </MainContainer>
        <Carrinho />
      </AppContainer>
    </>
  );
}

export default App;
