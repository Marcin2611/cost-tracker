import React, { ReactNode } from 'react';

export const Table = ({ children }: { children: ReactNode[] }) => {
  return (
    <div className="flex flex-col w-full max-h-[calc(100%-44px)] overflow-y-scroll">
      {children}
    </div>
  );
};

const Header = ({ children }: { children: ReactNode[] }) => {
  return (
    <div className={`grid grid-cols-${children.length} border-b-2`}>
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
  return <div className={`grid grid-cols-${children.length}`}>{children}</div>;
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
