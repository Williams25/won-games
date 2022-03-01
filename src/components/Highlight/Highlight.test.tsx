import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import { Highlight } from "./index";

const props = {
  title: "Heading 1",
  subTitle: "Heading 2",
  buttonLabel: "Buy now",
  buttonLink: "/",
  backgroundImage: "/img/red-dead-img.jpg"
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

  it("should render background image", () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyle({
      "background-image": `url(${props.backgroundImage})`
    });

    expect(container.firstChild).toHaveStyleRule(
      "background-color",
      "rgba(0,0,0,0.6)",
      {
        modifier: "::after"
      }
    );
  });

  it("should render float image", () => {
    renderWithTheme(
      <Highlight {...props} floatImage="/img/red-dead-float.png" />
    );

    expect(screen.getByRole("img", { name: props.title })).toHaveAttribute(
      "src",
      "/img/red-dead-float.png"
    );
  });
});
