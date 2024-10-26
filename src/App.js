import Card from "./components/Card/Card";
import Carrinho from "./components/Carrinho/Carrinho";
import Filtro from "./components/Filtro/Filtro";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Filtro />
      <Header />
      <Card />
      <Carrinho />
    </>
  );
}

export default App;
