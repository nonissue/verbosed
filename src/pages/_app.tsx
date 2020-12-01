/* eslint-disable @typescript-eslint/ban-types */
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import type { NextComponentType, NextPageContext } from "next";
import type { NextRouter } from "next/router";

import theme from "../theme";
import { AppProps } from "next/app";
import "./global.css";

export interface AppRenderProps {
  pageProps: object;
  err?: Error;
  Component: NextComponentType<NextPageContext, AppRenderProps, object>;
  router: NextRouter;
}

const MyApp: React.FunctionComponent<AppProps & AppRenderProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>WOTD</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
