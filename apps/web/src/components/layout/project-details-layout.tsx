import { FC } from 'react';

interface ProjectDetailsLayoutProps {
  children: React.ReactNode;
}

export const ProjectDetailsLayout: FC<ProjectDetailsLayoutProps> = ({
  children,
}) => {
  return <div className="flex grow flex-col gap-11 p-9">{children}</div>;
};
