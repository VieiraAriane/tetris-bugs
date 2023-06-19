import { format } from 'date-fns';

const Api_Url = "http://localhost:8080";
// const Api_Url = "https://burger-queen-api-mock-mu.vercel.app";

const pegaToken = () => {
  const token = localStorage.getItem("authToken");
  return token;
};
const userId = localStorage.getItem("userId");

export const obterPedidos = async () => {
  console.log('Obtendo pedidos...');
  const authToken = pegaToken();
  const response = await fetch(`${Api_Url}/orders`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  });
  if (!response.ok) {
    throw new Error("Erro ao obter pedidos");
  }
  return response.json();

};

export const enviarPedido = async (comanda, cliente, mesa) => {
  console.log('Enviando pedido...');

  const dataEntry = new Date();
  const dataEntryFormatted = format(dataEntry, 'dd/MM/yyyy -- HH:mm');

  const authToken = pegaToken();
    const pedido = {
        user: userId,
       mesa,
       client: cliente,
       products: comanda.map((item) => ({
       qty: item.quantidade,
       product: {
        id: item.id,
        name: item.name,
        price: item.preco,
        type: item.tipo,
        dateEntry: dataEntryFormatted
      },
    })),
    status: "Pendente",
    dataEntry: dataEntryFormatted,
  };

  const response = await fetch(`${Api_Url}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify(pedido),
  });

  if (!response.ok) {
    throw new Error("Erro ao enviar pedidos");
  }

  const data = await response.json();
  console.log("Resposta da API:", data);
  console.log('Pedido enviado com sucesso!');

};
