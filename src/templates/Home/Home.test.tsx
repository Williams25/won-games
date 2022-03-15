/* eslint-disable @typescript-eslint/no-explicit-any */
import "../../../.jest/match-media-mock";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import { Home, HomeTemplateProps } from "./index";
import bannersMock from "components/BannerSlider/mock";
import gamesMock from "components/GameCardSlider/mock";
import highlightMock from "components/Highlight/mock";

const props: HomeTemplateProps = {
  banners: bannersMock,
  newGames: gamesMock,
  mostPopularHighlight: highlightMock as any,
  mostPopularGames: gamesMock,
  upcommingGames: gamesMock,
  upcommingHighligth: highlightMock as any,
  upcommingMoreGames: gamesMock,
  freeGames: gamesMock,
  freeHighligth: highlightMock as any
};

describe("Home", () => {
  it("should render menu and footer", () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /contact us/i })
    ).toBeInTheDocument();
  });

  it("should render the sections", () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByRole("heading", { name: /news/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /most popular/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /upcomming/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /free games/i })
    ).toBeInTheDocument();

    // card game ( 5 sections com 1 card cada = 5x1 = 5)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(20);
  });
});
