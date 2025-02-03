import { DataTable } from '@/components/ui/data-table';
import { ColumnDef } from '@tanstack/react-table';
import { TaskSummary } from '@taskly/types';
import { FC, useMemo } from 'react';

const columns: ColumnDef<TaskSummary>[] = [
  {
    enableResizing: true,
    accessorKey: 'isCompleted',
    header: 'Id',
    cell: ({ getValue }) => (
      <input type="checkbox" defaultChecked={getValue<boolean>()} />
    ),
  },
  {
    accessorKey: 'title',
    header: 'Title',
  },
];

interface TasksListViewProps {
  tasks?: TaskSummary[];
}

export const TasksListView: FC<TasksListViewProps> = ({ tasks }) => {
  const data = useMemo(() => (tasks ? tasks : []), [tasks]);
  return <DataTable columns={columns} data={data} />;
};
