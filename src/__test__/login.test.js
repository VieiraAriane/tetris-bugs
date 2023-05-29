import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Logar from "../Pages/Login";
import { apiLogin } from "../API_URL/login";

jest.mock("../API_URL/login");

describe("Logar", () => {
  it("renders the login form", () => {
    render(<Logar />);

    expect(screen.getByText("Hamburgueria")).toBeInTheDocument();

    const logoElements = screen.getAllByAltText("Logo tetris em movimento");
    expect(logoElements.length).toBe(2);

    const emailInput = screen.getByPlaceholderText("Digite seu e-mail");
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByPlaceholderText("Digite sua senha");
    expect(passwordInput).toBeInTheDocument();

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("loga com sucesso quando um email e senha válidos são fornecidos", async () => {
    const response = {
      status: 400,
      json: () => Promise.resolve("Incorrect password"),
    };
    apiLogin.mockResolvedValueOnce(response);
    render(<Logar />);

    const emailInput = screen.getByPlaceholderText("Digite seu e-mail");
    const passwordInput = screen.getByPlaceholderText("Digite sua senha");

    fireEvent.change(emailInput, { target: { value: "valid@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "validpassword" } });

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);

    await waitFor(() => {
      const errorElement = screen.getByText("Senha incorreta!");
      expect(errorElement).toBeInTheDocument();
    });
  });
});
