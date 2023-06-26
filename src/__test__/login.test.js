import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect"; 
import Logar from '../Pages/login/Login';
import { apiLogin } from '../API_URL/autenticacao';

jest.mock("../API_URL/autenticacao");

describe("Logar", () => {
  it("Renderiza a página de login", () => {
    render(
      <MemoryRouter>
        <Logar />
      </MemoryRouter>
    );
    expect(screen.getByText("Hamburgueria")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Digite seu e-mail")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Digite sua senha")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("loga com sucesso quando um email e senha válidos são fornecidos", async () => {
    const response = {
      status: 200,
      user: {
        role: 'atendente',
        role: 'chef',
        role: 'adm',

      }
    };
    apiLogin.mockResolvedValueOnce(response);

    render(
      <MemoryRouter>
        <Logar />
      </MemoryRouter>
    );

    const emailInput = screen.getByPlaceholderText("Digite seu e-mail");
    const passwordInput = screen.getByPlaceholderText("Digite sua senha");

    fireEvent.change(emailInput, { target: { value: "valid@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "validpassword" } });

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(screen.getByText("Login bem-sucedido!")).toBeInTheDocument();
    });
  });
 });
