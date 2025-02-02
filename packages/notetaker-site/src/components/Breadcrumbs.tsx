import {ReactElement} from 'react';

export default function Breadcrumbs(p: {readonly path: string}): ReactElement {
  const parts = ['', ...p.path.split('/')];
  return (
    <div className="breadcrumbs">
      {parts.map((p, i) => (
        <Breadcrumb key={i} name={p} parents={parts.slice(0, i)} />
      ))}
    </div>
  );
}

function Breadcrumb(p: {
  readonly name: string;
  readonly parents: ReadonlyArray<string>;
}): ReactElement {
  return (
    <span className="breadcrumb">
      <span className="breadcrumb-name">{p.name || '\u2302'}</span>
      <span className="breadcrumb-folder">/</span>
    </span>
  );
}
