import { TaskSummary } from './task';

/**
 * Detailed type that describes a project entity.
 */
export interface Project {
  id: string;
  name: string;
  tasks?: TaskSummary[];
}

/**
 * Type used for obtaining a brief description of a project.
 */
export type ProjectSummary = Pick<Project, 'id' | 'name'>;
