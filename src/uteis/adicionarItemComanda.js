export const adicionarItemComanda = (item, comanda, setComanda) => {
  const itemExistente = comanda.find((comandaItem) => comandaItem.id === item.id);

  if (itemExistente) {
    itemExistente.quantidade++;
    itemExistente.preco = itemExistente.quantidade * itemExistente.precoUnitario; // Atualiza o preço total do item
    setComanda([...comanda]);
  } else {
    const novoItem = {
      id: item.id,
      name: item.name,
      quantidade: 1,
      precoUnitario: item.price,
      preco: item.price, // O preço total inicial é igual ao preço unitário
      img: item.image,
    };

    setComanda([...comanda, novoItem]);
  }
};
