import FiltroContainer from "./styled-filtro";

const Filtro = () => {
  return (
    <FiltroContainer>
        <p>Filtros</p>
       <label> Valor minimo :</label>
        <input type="number" />
        <label>Valor maximo:</label>
        <input type="number"></input>
        <label>Busca pelo nome:</label>
        <input type="text" placeholder="Produto"></input>
    </FiltroContainer>
  );
};

export default Filtro;
