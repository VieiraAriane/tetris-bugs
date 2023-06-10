import { obterProdutos } from "../API_URL/produtos";

export function getMenu(setMenu) {
  const data = obterProdutos()
    .then((res) => setMenu(res))
    .catch((error) => console.log(error));
  return data;
}