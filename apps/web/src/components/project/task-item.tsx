import { Card } from '@/components/ui/card';
import { Task } from '@taskly/types';
import { FC } from 'react';

type TaskItemProps = Task;

export const TaskItem: FC<TaskItemProps> = ({ title }) => {
  return (
    <Card>
      <h4 className="text-title-primary">{title}</h4>
    </Card>
  );
};
