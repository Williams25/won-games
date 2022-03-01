import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import { Highlight } from "./index";

const props = {
  title: "Heading 1",
  subTitle: "Heading 2",
  buttonLabel: "Buy now",
  buttonLink: "/"
};

describe("Highlight", () => {
  it("should render the heading", async () => {
    renderWithTheme(<Highlight {...props} />);

    expect(
      screen.getByRole("heading", { name: /Heading 1/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /Heading 2/i })
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /Buy now/gi })).toBeInTheDocument();
  });
});
