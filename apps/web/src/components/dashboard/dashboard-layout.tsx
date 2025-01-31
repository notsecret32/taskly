import { FC, PropsWithChildren } from 'react';

type DashboardLayoutProps = PropsWithChildren;

export const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return <main className="flex">{children}</main>;
};
