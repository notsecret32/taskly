import { TaskItem } from '@/components/project';
import { Project } from '@/types';
import { Ellipsis } from 'lucide-react';
import { FC } from 'react';

type TasksBoardViewProps = Pick<Project, 'tasks'>;

export const TasksBoardView: FC<TasksBoardViewProps> = ({ tasks }) => {
  return (
    <Container>
      <Column>
        <ColumnHeader onEdit={() => console.log('Edit column name')}>
          Column
        </ColumnHeader>
        <ColumnContent>
          {tasks?.map((task) => <TaskItem key={task.id} {...task} />)}
        </ColumnContent>
      </Column>
    </Container>
  );
};

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="flex gap-6">{children}</div>;
};

interface ColumnProps {
  children: React.ReactNode;
}

const Column: FC<ColumnProps> = ({ children }) => {
  return <div className="flex w-64 flex-col gap-8">{children}</div>;
};

interface ColumnHeaderProps {
  children: React.ReactNode;
  onEdit?: () => void;
}

const ColumnHeader: FC<ColumnHeaderProps> = ({ children, onEdit }) => {
  return (
    <div className="flex items-center justify-between">
      <h3>{children}</h3>
      {onEdit && <Ellipsis className="cursor-pointer" onClick={onEdit} />}
    </div>
  );
};

interface ColumnContentProps {
  children: React.ReactNode;
}

const ColumnContent: FC<ColumnContentProps> = ({ children }) => {
  return <div className="flex flex-col gap-4">{children}</div>;
};
