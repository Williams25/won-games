import { screen } from "@testing-library/react";
import { Ribbon } from "./index";
import { renderWithTheme } from "utils/tests/helpers";

describe("Ribbon", () => {
  it("should render the text correctly", async () => {
    const { container } = renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/Best Seller/gi)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render with primary color", async () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/Best Seller/gi)).toHaveStyle({
      "background-color": "#f231a5"
    });
  });

  it("should render with secondary color", async () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>);

    expect(screen.getByText(/Best Seller/gi)).toHaveStyle({
      "background-color": "#3cd3c1"
    });
  });

  it("should render with the normal size as dafault", async () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/Best seller/gi)).toHaveStyle({
      height: "3.6rem",
      "font-size": "1.4rem"
    });
  });

  it("should render with the small size", async () => {
    renderWithTheme(<Ribbon size="small">Best Seller</Ribbon>);

    expect(screen.getByText(/Best seller/gi)).toHaveStyle({
      height: "2.6rem",
      "font-size": "1.2rem"
    });
  });
});
