/**
 * Detailed type that describes a project entity.
 */
export interface Project {
  id: string;
  title: string;
}

/**
 * Type used for obtaining a brief description of a project.
 */
export type ProjectSummary = Pick<Project, 'id' | 'title'>;
