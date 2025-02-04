import { fetchProjectById } from '@/api';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

export const useProject = () => {
  const { projectId } = useParams<{ projectId: string }>();

  const { data: project, ...rest } = useQuery({
    queryKey: ['project', projectId],
    queryFn: () => fetchProjectById(projectId!),
    enabled: !!projectId,
    staleTime: 1000 * 60 * 10, // 10 min
  });

  return { ...rest, project };
};
