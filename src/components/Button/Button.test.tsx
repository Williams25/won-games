import "jest-styled-components";
import { screen } from "@testing-library/react";
import { Button } from "./index";
import { renderWithTheme } from "utils/tests/helpers";
import { AddShoppingCart } from "@styled-icons/material-rounded/AddShoppingCart";

describe("Button", () => {
  it("should render the medium size by default", () => {
    const { container } = renderWithTheme(<Button>Buy now</Button>);

    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      height: "4rem",
      padding: "0.8rem 3.2rem",
      "font-size": "1.4rem"
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render the large size", () => {
    renderWithTheme(<Button size="large">Buy now</Button>);

    expect(screen.getByRole("button", { name: /Buy now/ })).toHaveStyle({
      height: "5rem",
      padding: "0.8rem 4.8rem",
      "font-size": "1.6rem"
    });
  });

  it("should render the small size", () => {
    renderWithTheme(<Button size="small">Buy now</Button>);

    expect(screen.getByRole("button", { name: /Buy now/ })).toHaveStyle({
      height: "3rem",
      padding: "0.8rem",
      "font-size": "1.2rem"
    });
  });

  it("should render the fullWidth size", () => {
    renderWithTheme(<Button fullWidth={true}>Buy now</Button>);

    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      width: "100%"
    });
  });

  it("should darken the color with the focus", () => {
    renderWithTheme(<Button>Buy now</Button>);

    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyleRule(
      "filter",
      "brightness(0.9)",
      {
        modifier: ":hover"
      }
    );
  });

  it("should render an icon version", () => {
    renderWithTheme(
      <Button fullWidth icon={<AddShoppingCart data-testid="icon" />}>
        Buy now
      </Button>
    );

    expect(screen.getByText(/Buy now/i)).toBeInTheDocument();
    expect(screen.getByTestId(/icon/i)).toBeInTheDocument();
  });
});
