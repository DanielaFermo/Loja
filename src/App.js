import Card from "./components/Card/Card";
import Carrinho from "./components/Carrinho/Carrinho";
import Filtro from "./components/Filtro/Filtro";
import Header from "./components/Header/Header";
import styled, { createGlobalStyle } from "styled-components";
import ShowProducts from "./components/ShowProducts/ShowPoducts";
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
  return (
    <>
      <GlobalStyled />
      <AppContainer>
        <Filtro />
        <MainContainer>
          <Header />
          <ShowProducts />
        </MainContainer>
        <Carrinho />
      </AppContainer>
    </>
  );
}

export default App;
