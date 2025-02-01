export interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

export type TaskSummary = Pick<Task, 'id' | 'title' | 'isCompleted'>;
