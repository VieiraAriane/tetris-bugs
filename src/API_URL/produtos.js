const Api_Url = "https://burger-queen-api-mock-mu.vercel.app";

const pegaToken = () => {
  const token = localStorage.getItem("authToken");
  return token;
};

export const obterProdutos = async () => {
  try {
    const authToken = pegaToken();
    const response = await fetch(`${Api_Url}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
