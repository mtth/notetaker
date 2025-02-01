import Head from 'next/head';
import {ReactElement} from 'react';

export default function IndexPage(): ReactElement {
  return (
    <>
      <Head>
        <title>Notes</title>
      </Head>
      <p>Hello</p>
    </>
  );
}
