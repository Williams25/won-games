import { GlobalStyle } from "styles/global";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={{ ...theme }}>
      <GlobalStyle removeBg />
      <Story />
    </ThemeProvider>
  )
];
