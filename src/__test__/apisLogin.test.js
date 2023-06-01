import { apiLogin } from "../API_URL/login";

describe("apiLogin", () => {
  it("deve fazer uma solicitação de login e retornar a resposta", async () => {
    // Simula a resposta do servidor
    const mockResponse = { status: 200, json: jest.fn().mockResolvedValue({ token: "abc123" }) };
    // Mock da função fetch
    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    // Dados de exemplo para o login
    const email = "test@example.com";
    const password = "password";

    // Chama a função apiLogin
    const response = await apiLogin(email, password);

    // Verifica se a função fetch foi chamada corretamente
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "https://burger-queen-api-mock-mu.vercel.app/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    // Verifica se a resposta é a esperada
    expect(response).toEqual(mockResponse);
  });
});