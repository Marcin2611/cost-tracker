import React, { ReactNode } from 'react';

const colsTailwindClass: { [k: number]: string } = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
  11: 'grid-cols-11',
  12: 'grid-cols-12',
};

export const Table = ({ children }: { children: ReactNode[] }) => {
  return (
    <div className="flex flex-col w-full max-h-[calc(100%-44px)] overflow-y-scroll">
      {children}
    </div>
  );
};

const Header = ({ children }: { children: ReactNode[] }) => {
  return (
    <div className={`grid ${colsTailwindClass[children.length]} border-b-2`}>
      {children}
    </div>
  );
};

const ColumnName = ({
  children,
  hide,
}: {
  children: ReactNode[] | ReactNode;
  hide?: boolean;
}) => {
  return <div>{!hide && children}</div>;
};

const Body = ({ children }: { children: ReactNode[] }) => {
  return <div className="flex flex-col">{children}</div>;
};

const Row = ({ children }: { children: ReactNode[] }) => {
  return (
    <div className={`grid ${colsTailwindClass[children.length]}`}>
      {children}
    </div>
  );
};

const Cell = ({ children }: { children: ReactNode[] | ReactNode }) => {
  return <div>{children}</div>;
};

Table.Header = Header;
Table.Body = Body;
Table.ColumnName = ColumnName;
Table.Row = Row;
Table.Cell = Cell;

export default Table;
