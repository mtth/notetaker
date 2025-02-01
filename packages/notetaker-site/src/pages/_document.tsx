import {Head, Html, Main, NextScript} from 'next/document';
import {ReactElement} from 'react';

export default function Document(): ReactElement {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
