import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { theme, GlobalStyles } from "@styles";

const App = ({ Component, pageProps }: AppProps) => {
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
