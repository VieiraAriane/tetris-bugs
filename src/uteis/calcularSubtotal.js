export const calcularSubtotal = (comanda) => {
  let subtotal = 0;
  comanda.forEach((item) => {
    subtotal += item.preco
  });
  return subtotal;
};
