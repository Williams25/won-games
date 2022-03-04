import { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyle } from "styles/global";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={{ ...theme }}>
      <Head>
        <title>Won Games</title>
        <link rel="shortcut icon" href="/img/Icon.svg" />
        <link rel="apple-touch-icon" href="/img/Icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="The best Game Stores in the world!" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
