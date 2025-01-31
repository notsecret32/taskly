import { Task } from '@/types';

export interface BoardView {
  columns: BoardViewColumn[];
}

export interface BoardViewColumn {
  title: string;
  tasks: Task[];
}
