import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import { Footer } from "./index";

describe("Footer", () => {
  it("should render 4 column topics", async () => {
    const { container } = renderWithTheme(<Footer />);

    expect(
      screen.getByRole("heading", { name: /Contact/gi })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Follow us/gi })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Links/gi })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Location/gi })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
