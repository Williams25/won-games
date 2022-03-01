import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import { Highlight } from "./index";
import * as S from "./styles";

const props = {
  title: "Heading 1",
  subTitle: "Heading 2",
  buttonLabel: "Buy now",
  buttonLink: "/",
  backgroundImage: "/img/red-dead-img.jpg"
};

describe("Highlight", () => {
  it("should render the heading", async () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(
      screen.getByRole("heading", { name: /Heading 1/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /Heading 2/i })
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /Buy now/gi })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
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

  it("should render align right by default", () => {
    const { container } = renderWithTheme(
      <Highlight {...props} floatImage="/img/red-dead-float.png" />
    );

    expect(container.firstChild).toHaveStyleRule(
      "grid-template-areas",
      // eslint-disable-next-line no-useless-escape
      `\"floatimage content\"`
    );

    expect(container.firstChild).toHaveStyleRule("text-align", "right", {
      modifier: `${S.Content}`
    });

    expect(container.firstChild).toHaveStyleRule("justify-self", "start", {
      modifier: `${S.FloatImage}`
    });
  });

  it("should render align left", () => {
    const { container } = renderWithTheme(
      <Highlight
        {...props}
        alignment="left"
        floatImage="/img/red-dead-float.png"
      />
    );

    expect(container.firstChild).toHaveStyleRule(
      "grid-template-areas",
      // eslint-disable-next-line no-useless-escape
      `\"content floatimage\"`
    );

    expect(container.firstChild).toHaveStyleRule("text-align", "left", {
      modifier: `${S.Content}`
    });

    expect(container.firstChild).toHaveStyleRule("justify-self", "end", {
      modifier: `${S.FloatImage}`
    });
  });
});
