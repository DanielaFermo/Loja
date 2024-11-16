import Card from "../Card/Card";
import { ShowProductsContainer } from "./styled-showProducts";
import { productList } from "../../Constants/ProductList";

export default function ShowProducts({ nome, valorMax, valorMin , ordem , addToCart}) {
  const listaRedenrizada = () => {
    const novaLista = productList
      /*       .filter((produto) => {
      if(produto.preco >= valorMin || produto.preco <=valorMax){
return produto
      }else if(!valorMax){
        return productList
      }
      }) */
      .filter((produto) => {
        //console.log(valorMax);
        if (produto.preco <= valorMax) {
          return produto;
        } else if (!valorMax) {
          console.log(Boolean(valorMax));
          return productList;
        }
      })
      .filter((produto) => {
        //console.log(valorMin);
        if (produto.preco >= valorMin) {
          return produto;
        } else if (!valorMin) {
          return productList;
        }
      })
      .filter((produto) => {
        return produto.nome.includes(nome);
      })
   .sort((a,b)=>{
        switch(ordem){
          case "cres":
            if(a.nome < b.nome){
              return-1
            }break
            case "decr":
              if(a.nome > b.nome){
                return -1
              }
              default:
                return 0 
        }

      })
      
      .map((produto, indice) => {
        //console.log("map", produto);
        return <Card key={indice} produto={produto} addToCart={addToCart} />;
      });
    return novaLista;
  };
  return <ShowProductsContainer>{listaRedenrizada()}</ShowProductsContainer>;
}
