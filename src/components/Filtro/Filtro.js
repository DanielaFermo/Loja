import FiltroContainer from "./styled-filtro";
import { useState } from "react";


const Filtro = ({nome , onChangeNome , valorMax , valorMin , onChangeValorMin , onChangeValorMax}) => {
  return (
    <FiltroContainer>
        <p>Filtros</p>
       <label> Valor minimo :</label>
        <input type="number" value={valorMin} onChange={onChangeValorMin}/>
        <label>Valor maximo:</label>
        <input type="number" value={valorMax} onChange={onChangeValorMax}/>
        <label>Busca pelo nome:</label>
        <input type="text" placeholder="Produto" value={nome} onChange={onChangeNome}></input>
    </FiltroContainer>
  );
};

export default Filtro;
