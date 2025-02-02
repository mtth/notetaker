import AsciiDoctor, {Document} from '@asciidoctor/core';
import {ReactElement, useEffect, useMemo, useState} from 'react';

export default function AsciiDoc(p: {
  readonly path: string;
  readonly onDocument?: (doc: Document) => void;
}): ReactElement {
  const doctor = useMemo(() => AsciiDoctor(), []);
  const [html, setHtml] = useState('');

  useEffect(() => {
    let consume = setHtml;

    async function run(): Promise<void> {
      const res = await fetch(p.path);
      if (!res.ok) {
        throw new Error(res.statusText);
        return;
      }
      const text = await res.text();
      const doc = doctor.load(text);
      p.onDocument?.(doc);
      consume(doc.convert());
    }

    run().catch((err) => void consume('' + err));

    return () => {
      consume = () => undefined;
    };
  }, [p.path]);

  return (
    <div id="content">
      <div dangerouslySetInnerHTML={{__html: html}} />
    </div>
  );
}
