import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import { Slider } from "./index";

describe("Slider", () => {
it("should render the heading", async () => {
renderWithTheme(
<Slider />
);
expect(
screen.getByRole("heading", { name: /Slider/i })
).toBeInTheDocument();
});
});