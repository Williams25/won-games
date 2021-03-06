import { screen, fireEvent } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import theme from "styles/theme";
import { GameCard } from "./index";

const props = {
  title: "Red Dead Redemption",
  developer: "Rockstar Games",
  img: "/img/red-dead-img.jpg",
  price: "R$ 235,00"
};

describe("GameCard", () => {
  it("should render the heading", async () => {
    const { container } = renderWithTheme(<GameCard {...props} />);

    expect(
      screen.getByRole("heading", { name: props.title })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: props.developer })
    ).toBeInTheDocument();

    expect(screen.getByRole("img", { name: props.title })).toHaveAttribute(
      "src",
      props.img
    );

    expect(screen.getByLabelText(/add to wish list/gi)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render price in label", () => {
    // renderiza o componente
    renderWithTheme(<GameCard {...props} />);
    // preço não tenha line-through

    // preço tenha o background secundário
    const price = screen.getByText("R$ 235,00");

    expect(price).not.toHaveStyle({ textDecoration: "line-through" });
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary });
  });

  it("should render a line-through in price when promotional", () => {
    // renderiza o componente (COM promotionalPrice) // 235 reais // 15 reais
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 15,00" />);

    // preço tenha line-through (235)
    expect(screen.getByText("R$ 235,00")).toHaveStyle({
      textDecoration: "line-through"
    });

    // preço novo promocional não vai ter line-through (15)
    expect(screen.getByText("R$ 15,00")).not.toHaveStyle({
      textDecoration: "line-through"
    });
  });

  it("should render a filled favorite icon when favorite is true", () => {
    renderWithTheme(<GameCard {...props} favorite={true} />);

    expect(screen.getByLabelText(/remove to wish list/gi)).toBeInTheDocument();
  });

  it("should call onFav method when favorite is clicked", () => {
    const onFav = jest.fn();
    renderWithTheme(<GameCard {...props} favorite={true} onFav={onFav} />);

    fireEvent.click(screen.getAllByRole("button")[0]);

    expect(onFav).toBeCalled();
  });

  it("should render Ribbon", () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    );
    const ribbon = screen.getByText(/my ribbon/i);

    expect(ribbon).toHaveStyle({ backgroundColor: "#3CD3C1" });
    expect(ribbon).toHaveStyle({ height: "2.6rem", fontSize: "1.2rem" });
    expect(ribbon).toBeInTheDocument();
  });
});
