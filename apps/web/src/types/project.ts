import { TaskSummary } from '@/types';

/**
 * Detailed type that describes a project entity.
 */
export interface Project {
  id: string;
  title: string;
  tasks?: TaskSummary[];
}

/**
 * Type used for obtaining a brief description of a project.
 */
export type ProjectSummary = Pick<Project, 'id' | 'title'>;
