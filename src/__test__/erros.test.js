import { Erros } from "../uteis /Erros";

describe("Erros", () => {
  test("returns correct error message for Incorrect password", () => {
    const errorMessage = Erros("Incorrect password");
    expect(errorMessage).toBe("Senha incorreta!");
  });

  test("returns correct error message for Cannot find user", () => {
    const errorMessage = Erros("Cannot find user");
    expect(errorMessage).toBe("Usuário não encontrado!");
  });

  test("returns correct error message for Email and password are required", () => {
    const errorMessage = Erros("Email and password are required");
    expect(errorMessage).toBe("Por favor, preencha todos os campos!");
  });

  test("returns default error message for unknown error", () => {
    const errorMessage = Erros("Some unknown error");
    expect(errorMessage).toBe("Ops, ocorreu algum erro!");
  });
});
