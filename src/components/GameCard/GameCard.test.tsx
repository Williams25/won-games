import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import { GameCard } from "./index";

const props = {
  title: "Red Dead Redemption",
  developer: "Rockstar Games",
  img: "/img/red-dead-img.jpg",
  price: "R$ 55"
};

describe("GameCard", () => {
  it("should render the heading", async () => {
    renderWithTheme(<GameCard {...props} />);

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
  });
});
