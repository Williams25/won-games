import "jest-styled-components";
import { screen, fireEvent } from "@testing-library/react";
import { Menu } from "./index";
import { renderWithTheme } from "utils/tests/helpers";

describe("Menu", () => {
  it("should render the menu", async () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/shopping card/i)).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /won games/gi })
    ).toBeInTheDocument();
  });

  it("should handle the open/close mobile menu", () => {
    renderWithTheme(<Menu />);

    // selecionar menufull
    const fullMenuElement = screen.getByRole("navigation", { hidden: true });
    // verificar se o menu esta escondido
    expect(fullMenuElement.getAttribute("aria-hidden")).toBe("true");
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });

    // clicar no botao para abrir menu e verificar se abriu
    fireEvent.click(screen.getByLabelText(/open menu/i));
    expect(fullMenuElement.getAttribute("aria-hidden")).toBe("false");
    expect(fullMenuElement).toHaveStyle({ opacity: 1 });

    // clicar de fechar e verificar se fechou
    fireEvent.click(screen.getByLabelText(/close menu/gi));
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
  });

  it("should show register box when logged out", () => {
    renderWithTheme(<Menu />);

    expect(screen.getByText(/Log in now/gi)).toBeInTheDocument();
    expect(screen.getByText(/Sign Up/gi)).toBeInTheDocument();

    expect(screen.queryByText(/My account/gi)).not.toBeInTheDocument();
    expect(screen.queryByText(/Wishlist/gi)).not.toBeInTheDocument();
  });

  it("should show My account and Wishlist when logged in", () => {
    renderWithTheme(<Menu userName="teste" />);

    expect(screen.getByText(/My account/gi)).toBeInTheDocument();
    expect(screen.getByText(/Wishlist/gi)).toBeInTheDocument();

    expect(screen.queryByText(/Log in now/gi)).not.toBeInTheDocument();
    expect(screen.queryByText(/Sign Up/gi)).not.toBeInTheDocument();
  });
});
