import { ProjectDetailsLayout } from '@/components/layout';
import { TasksListView } from '@/components/project';
import { useProject } from '@/hooks';
import { Pencil } from 'lucide-react';
import { FC } from 'react';

export const ProjectDetails: FC = () => {
  const { project, isLoading, error, isError } = useProject();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !project) {
    console.error(error);
    return <div>Error... check console</div>;
  }

  return (
    <ProjectDetailsLayout>
      <ProjectTitle onEdit={() => console.log('Edit title')}>
        <h1>{project.name}</h1>
      </ProjectTitle>
      <TasksListView tasks={project.tasks} />
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
