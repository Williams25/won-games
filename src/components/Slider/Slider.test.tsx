import "../../../.jest/match-media-mock";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import { Slider } from "./index";

describe("Slider", () => {
  it("should render children as slider item", async () => {
    const { container } = renderWithTheme(
      <Slider settings={{ slidesToShow: 1, infinite: false }}>
        <p>item 1</p>
        <p>item 2</p>
      </Slider>
    );

    expect(
      screen.getByText(/item 1/gi).parentElement?.parentElement
    ).toHaveClass("slick-slide");

    expect(
      screen.getByText(/item 2/gi).parentElement?.parentElement
    ).toHaveClass("slick-slide");

    expect(container.firstChild).toMatchSnapshot();
  });
});
