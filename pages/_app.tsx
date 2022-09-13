import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import NoSsr from "@mui/base/NoSsr";

import theme from "components/theme";
import createEmotionCache from "components/theme/createEmotionCache";
import { Provider } from "react-redux";

import "@fontsource/lexend-deca";
import { store } from "store";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NoSsr>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </NoSsr>
      </ThemeProvider>
    </CacheProvider>
  );
}
