// const Api_Url = "http://localhost:8080";
const Api_Url = "https://burger-queen-api-mock-mu.vercel.app";

const setToken = (token) => {
  if (token) {
    localStorage.setItem("authToken", token);
  }
};
// requisão para fazer login com email e senha
export async function apiLogin(email, password) {
  const response = await fetch(`${Api_Url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  if (response.status === 400) {
    throw new Error("Confira suas credenciais");
  }
  const data = await response.json();
  console.log(data);
  const authToken = data.accessToken;
  setToken(authToken);

  return data;
}
