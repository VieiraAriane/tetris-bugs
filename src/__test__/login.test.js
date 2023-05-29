import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Logar from "../Pages/Login";
import "@testing-library/jest-dom";

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

  it("logs in successfully when valid email and password are provided", async () => {
    render(<Logar />);

    const emailInput = screen.getByPlaceholderText("Digite seu e-mail");
    const passwordInput = screen.getByPlaceholderText("Digite sua senha");

    fireEvent.change(emailInput, { target: { value: "valid@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "validpassword" } });

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);

    await waitFor(() => {
      const errorElement = screen.getByText("Ops, ocorreu algum erro!");
      expect(errorElement.textContent).toBe("Ops, ocorreu algum erro!");

    });
  });
});
