import { OptionsContainer } from "./styled-header";



export default function Header () {
    return(
        <OptionsContainer>
        <p>Quantidade de produtos:2</p>
        <label>Ordenaçao
        <select>
            <option>Crescente</option>
            <option>Decrescente</option>
        </select>
        </label>
        </OptionsContainer>
    )
}

