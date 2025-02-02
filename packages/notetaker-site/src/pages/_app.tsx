import '../styles.css';

import {AppProps} from 'next/app';
import {ReactElement} from 'react';

export default function App(p: AppProps): ReactElement {
  const {Component, pageProps} = p;
  return <Component {...pageProps} />;
}
