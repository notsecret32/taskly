import { FC } from 'react';
import { useParams } from 'react-router';

interface ProjectDetailsParams extends Record<string, string | undefined> {
  projectId: string;
}

export const ProjectDetails: FC = () => {
  const params = useParams<ProjectDetailsParams>();
  return <div>Project details for project with id: {params.projectId}</div>;
};
