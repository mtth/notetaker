import Head from 'next/head';
import {usePathname, useSearchParams} from 'next/navigation';
import {ReactElement, useState} from 'react';

import AsciiDoc from '../components/AsciiDoc';
import Breadcrumbs from '../components/Breadcrumbs';

const DEFAULT_TITLE = 'Notes';

export default function IndexPage(): ReactElement {
  const [title, setTitle] = useState(DEFAULT_TITLE);

  const pathname = usePathname();
  const params = useSearchParams();
  let docpath = params.get('path');
  if (!docpath) {
    docpath = pathname
      .replace(/\/$/, '/index.html')
      .replace(/(\.html)?$/, '.adoc');
  }
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div id="navbar">
        <Breadcrumbs path={'hello/there'} />
      </div>
      <div id="container">
        <AsciiDoc
          path={docpath}
          onDocument={(doc) => {
            const suffix = doc.getTitle();
            setTitle(
              suffix && suffix !== DEFAULT_TITLE
                ? `${DEFAULT_TITLE} - ${suffix}`
                : DEFAULT_TITLE
            );
          }}
        />
      </div>
    </>
  );
}
