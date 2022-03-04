import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import theme from "styles/theme";
import { Container } from "./index";

describe("Container", () => {
  it("should render the heading", async () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Won Games</span>
      </Container>
    );

    expect(container.firstChild).toHaveStyleRule(
      "max-width",
      theme.grid.container
    );

    expect(screen.getByText(/Won Games/gi)).toBeInTheDocument();

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div
        class="c0"
      >
        <span>
          Won Games
        </span>
      </div>
    `);
  });
});
