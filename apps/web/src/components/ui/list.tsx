import { PropsWithChildren } from 'react';

export const ListLabel = ({ children }: PropsWithChildren) => {
  return <h4 className="uppercase">{children}</h4>;
};

export const List = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};
