import { ProjectList } from '@/components/project';
import { ProjectSummary } from '@taskly/types';
import { FC, PropsWithChildren, useState } from 'react';
import { CreateProjectModal } from '../modals';

interface SidebarProps {
  projects: ProjectSummary[] | undefined;
}

export const Sidebar: FC<SidebarProps> = ({ projects }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen min-w-[300px] border-r">
      <SidebarHeader>
        <h2>Dashboard</h2>
      </SidebarHeader>
      <SidebarBody>
        <ProjectList projects={projects} onAdd={() => setIsOpen(true)} />
        <CreateProjectModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </SidebarBody>
    </div>
  );
};

const SidebarHeader: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex items-center justify-between border-b px-8 py-[30px]">
      {children}
    </div>
  );
};

const SidebarBody: FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex flex-col gap-5 px-8 py-[30px]">{children}</div>;
};
