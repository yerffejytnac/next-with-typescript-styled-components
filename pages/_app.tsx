import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { theme, GlobalStyles } from "@styles";

interface Props extends AppProps {
  // TODO: See issue documented here... https://github.com/vercel/next.js/issues/36008
  Component: any;
}

const App = ({ Component, pageProps }: Props) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
