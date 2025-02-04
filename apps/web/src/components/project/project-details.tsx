import { ProjectDetailsLayout } from '@/components/layout';
import { TasksListView } from '@/components/project';
import { Modal } from '@/components/ui/modal';
import { Project } from '@taskly/types';
import { Pencil } from 'lucide-react';
import { FC, useState } from 'react';

const project: Project = {
  id: '1',
  name: 'Project Details',
  tasks: [
    {
      id: '1',
      title: 'Task #1',
      isCompleted: true,
    },
    {
      id: '2',
      title: 'Task #2',
      isCompleted: false,
    },
    {
      id: '3',
      title: 'Task #3',
      isCompleted: false,
    },
    {
      id: '4',
      title: 'Task #4',
      isCompleted: false,
    },
    {
      id: '5',
      title: 'Task #5',
      isCompleted: false,
    },
  ],
};

export const ProjectDetails: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const { name, tasks } = project;

  return (
    <ProjectDetailsLayout>
      <ProjectTitle onEdit={() => console.log('Edit title')}>
        <h1>{name}</h1>
      </ProjectTitle>
      <TasksListView tasks={tasks} />
      <Modal
        isOpen={isModalOpen}
        label="Task #1"
        onClose={() => setIsModalOpen(false)}
      >
        Hello, Modal!
      </Modal>
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
