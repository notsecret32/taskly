import { FC } from 'react';
import { useParams } from 'react-router';

export const ProjectPage: FC = () => {
  const params = useParams();
  return <div>Project page with id: {params.projectId}</div>;
};
