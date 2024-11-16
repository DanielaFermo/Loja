import { useState } from "react";
import { OptionsContainer } from "./styled-header";

export default function Header({ordem ,onChangeOrdem,cart}) {



  return (
    <OptionsContainer>
      <p>Quantidade de produtos:{cart.length}</p>
      <label>
        Ordenaçao
        <select value={ordem} onChange={onChangeOrdem}>
          <option value="cres" >
            Crescente
          </option>
          <option value="decr" >
            Decrescente
          </option>
        </select>
      </label>
    </OptionsContainer>
  );
}
