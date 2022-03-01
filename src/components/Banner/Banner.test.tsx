import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import { Banner } from "./index";

const props = {
  img: "https://source.unsplash.com/user/willianjusten/1042x580",
  title: "Defy death",
  subtitle: "<p>Play the new <strong>CrashLands</strong> season",
  buttonLabel: "Buy now",
  buttonLink: "/games/defy-death"
};

describe("Banner", () => {
  it("should render the banner", async () => {
    const { container } = renderWithTheme(<Banner {...props} />);

    expect(
      screen.getByRole("heading", { name: /Defy death/gi })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Play the/gi })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /Defy death/gi })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render a ribbon the normal size and color primary", () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="Ribbon"
        ribbonColor="primary"
        ribbonSize="normal"
      />
    );

    expect(screen.getByText(/Ribbon/gi)).toBeInTheDocument();
    expect(screen.getByText(/Ribbon/gi)).toHaveStyle({
      height: "3.6rem",
      "font-size": "1.4rem",
      "background-color": "#f231a5"
    });
  });

  it("should render a ribbon the normal size and color secondary", () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="Ribbon"
        ribbonColor="secondary"
        ribbonSize="normal"
      />
    );

    expect(screen.getByText(/Ribbon/gi)).toBeInTheDocument();
    expect(screen.getByText(/Ribbon/gi)).toHaveStyle({
      height: "3.6rem",
      "font-size": "1.4rem",
      "background-color": "#3cd3c1"
    });
  });

  it("should render a ribbon the small size and color primary", () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="Ribbon"
        ribbonColor="primary"
        ribbonSize="small"
      />
    );

    expect(screen.getByText(/Ribbon/gi)).toBeInTheDocument();
    expect(screen.getByText(/Ribbon/gi)).toHaveStyle({
      height: "2.6rem",
      "font-size": "1.2rem",
      "background-color": "#f231a5"
    });
  });

  it("should render a ribbon the small size and color secondary", () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    );

    expect(screen.getByText(/Ribbon/gi)).toBeInTheDocument();
    expect(screen.getByText(/Ribbon/gi)).toHaveStyle({
      height: "2.6rem",
      "font-size": "1.2rem",
      "background-color": "#3cd3c1"
    });
  });
});
