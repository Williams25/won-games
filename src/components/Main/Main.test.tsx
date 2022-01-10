import { render, screen } from "@testing-library/react";
import { Main } from "./index";

describe("Main", () => {
  it("should render the heading", async () => {
    render(
      <Main title="React avançado" description="TypeScript, React, NextJS" />
    );
    expect(
      screen.getByRole("heading", { name: /react avançado/i })
    ).toBeInTheDocument();
  });

  it("should render correctly", async () => {
    const { container } = render(
      <Main title="React avançado" description="TypeScript, React, NextJS" />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
