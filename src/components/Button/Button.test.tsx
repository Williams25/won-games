import "jest-styled-components";
import { screen } from "@testing-library/react";
import { Button } from "./index";
import { renderWithTheme } from "utils/tests/helpers";

describe("Button", () => {
  it("should render the medium size by default", () => {
    renderWithTheme(<Button>Buy now</Button>);

    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      height: "4rem",
      padding: "0.8rem 3.2rem",
      "font-size": "1.4rem"
    });
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
    renderWithTheme(<Button fullWidth>Buy now</Button>);

    expect(screen.getByRole("button", { name: /Buy now/ })).toHaveStyle({
      width: "100%"
    });
  });

  it("should darken the color with the focus", () => {
    renderWithTheme(<Button>Buy now</Button>);

    expect(screen.getByRole("button", { name: /Buy now/ })).toHaveStyleRule(
      "filter",
      "brightness(0.9)",
      {
        modifier: ":hover"
      }
    );
  });
});
