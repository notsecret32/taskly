import { ProjectList } from '@/components/project';
import { ProjectSummary } from '@/types';
import { Menu } from 'lucide-react';
import { FC, PropsWithChildren } from 'react';

const projects: ProjectSummary[] = [
  {
    id: '1',
    title: 'Project #1',
  },
  {
    id: '2',
    title: 'Project #2',
  },
  {
    id: '3',
    title: 'Project #3',
  },
  {
    id: '4',
    title: 'Project #4',
  },
  {
    id: '5',
    title: 'Project #5',
  },
];

export const Sidebar: FC = () => {
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
