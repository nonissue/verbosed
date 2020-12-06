/* eslint-disable */
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          {/* <link rel="manifest" href="/manifest.json" /> */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />

          <link rel="stylesheet" href="/fonts/inter/inter-swap.css" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link
            href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
            rel="stylesheet"
          />
          {/* <meta content="/mstile-70x70.png" name="msapplication-square70x70" />
          <meta
            content="/mstile-144x144.png"
            name="msapplication-square144x144"
          />
          <meta
            content="/mstile-150x150.png"
            name="msapplication-square150x150"
          />
          <meta
            content="/mstile-310x150.png"
            name="msapplication-wide310x150"
          />
          <meta
            content="/mstile-310x310.png"
            name="msapplication-square310x310"
          /> */}
          <link
            href="/apple-touch-icon-57x57.png"
            rel="apple-touch-icon"
            sizes="57x57"
          />
          <link
            href="/apple-touch-icon-60x60.png"
            rel="apple-touch-icon"
            sizes="60x60"
          />
          <link
            href="/apple-touch-icon-72x72.png"
            rel="apple-touch-icon"
            sizes="72x72"
          />
          <link
            href="/apple-touch-icon-76x76.png"
            rel="apple-touch-icon"
            sizes="76x76"
          />
          <link
            href="/apple-touch-icon-114x114.png"
            rel="apple-touch-icon"
            sizes="114x114"
          />
          <link
            href="/apple-touch-icon-120x120.png"
            rel="apple-touch-icon"
            sizes="120x120"
          />
          <link
            href="/apple-touch-icon-144x144.png"
            rel="apple-touch-icon"
            sizes="144x144"
          />
          <link
            href="/apple-touch-icon-152x152.png"
            rel="apple-touch-icon"
            sizes="152x152"
          />
          <link
            href="/apple-touch-icon-167x167.png"
            rel="apple-touch-icon"
            sizes="167x167"
          />
          <link
            href="/apple-touch-icon-180x180.png"
            rel="icon"
            sizes="180x180"
            type="image/png"
          />
          <link
            href="/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
