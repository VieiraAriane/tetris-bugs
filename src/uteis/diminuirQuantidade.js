export const diminuirQuantidade = (item, comanda, setComanda) => {
  const updatedComanda = comanda.map((comandaItem) => {
    if (comandaItem.id === item.id) {
      if (comandaItem.quantidade > 1) {
        comandaItem.quantidade--;
        comandaItem.preco = comandaItem.quantidade * comandaItem.precoUnitario; // Atualiza o preço total do item
      } else {
        // Remove o item da comanda
        return null;
      }
    }
    return comandaItem;
  });

  // Remove os itens nulos (itens que devem ser excluídos)
  const novaComanda = updatedComanda.filter((item) => item !== null);

  setComanda(novaComanda);
};
