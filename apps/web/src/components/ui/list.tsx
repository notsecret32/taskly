import { FC } from 'react';

interface ListProps {
  children: React.ReactNode;
}

const List: FC<ListProps> = ({ children }) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

interface ListHeaderProps {
  children: React.ReactNode;
}

const ListHeader: FC<ListHeaderProps> = ({ children }) => {
  return <div className="flex justify-between uppercase">{children}</div>;
};

interface ListContentProps {
  children: React.ReactNode;
}

const ListContent: FC<ListContentProps> = ({ children }) => {
  return <div className="flex flex-col gap-1">{children}</div>;
};

export { List, ListContent, ListHeader };
