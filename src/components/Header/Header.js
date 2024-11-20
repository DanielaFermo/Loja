import { useState } from "react";
import { OptionsContainer, QuantidadeContainer } from "./styled-header";

export default function Header({ordem ,onChangeOrdem,cart}) {



  return (
    <OptionsContainer>
      <QuantidadeContainer>
      <img src="https://png.pngtree.com/png-vector/20190725/ourmid/pngtree-vector-shopping-bag-icon-png-image_1577291.jpg"></img>
      {cart.length}
      </QuantidadeContainer>
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
