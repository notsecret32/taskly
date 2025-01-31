import { ProjectDetailsLayout } from '@/components/layout';
import { TasksBoardView } from '@/components/project';
import { Project } from '@/types';
import { Pencil } from 'lucide-react';
import { FC } from 'react';

const project: Project = {
  id: '1',
  title: 'Project Details',
  tasks: [],
};

export const ProjectDetails: FC = () => {
  const { title, tasks } = project;

  return (
    <ProjectDetailsLayout>
      <ProjectTitle onEdit={() => console.log('Edit title')}>
        <h1>{title}</h1>
      </ProjectTitle>
      <TasksBoardView tasks={tasks} />
    </ProjectDetailsLayout>
  );
};

interface TitleProps {
  children: React.ReactNode;
  onEdit?: () => void;
}

const ProjectTitle: FC<TitleProps> = ({ children, onEdit }) => {
  return (
    <div className="flex items-center gap-6">
      {children}
      {onEdit && (
        <Pencil className="cursor-pointer" size={18} onClick={onEdit} />
      )}
    </div>
  );
};
