import { render, screen } from "@testing-library/react";
import { Button } from "./index";

describe("Button", () => {
  it("should render the heading", async () => {
    render(<Button />);
    expect(screen.getByText(/Button/i)).toBeInTheDocument();
  });
});
