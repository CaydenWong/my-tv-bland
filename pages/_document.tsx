import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="content-language" content="en-gb" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="TV schedules and show" />
        <link rel="icon" type="image/png" href="/icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
