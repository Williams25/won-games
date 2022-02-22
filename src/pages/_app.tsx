import { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyle } from "styles/global";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{ ...theme }}>
      <Head>
        <title>React avançado</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
