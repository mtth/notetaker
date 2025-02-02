import {Head, Html, Main, NextScript} from 'next/document';
import {ReactElement} from 'react';

export default function Document(): ReactElement {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
