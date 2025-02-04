import { ProjectList } from '@/components/project';
import { ProjectSummary } from '@taskly/types';
import { Menu } from 'lucide-react';
import { FC, PropsWithChildren } from 'react';

interface SidebarProps {
  projects: ProjectSummary[] | undefined;
}

export const Sidebar: FC<SidebarProps> = ({ projects }) => {
  return (
    <div className="h-screen min-w-[300px] border-r">
      <SidebarHeader>
        <h2>Dashboard</h2>
        <Menu className="cursor-pointer" />
      </SidebarHeader>
      <SidebarBody>
        <ProjectList
          projects={projects}
          onAdd={() => console.log('Add project')}
        />
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
