import api from '@/api';
import { ProjectSummary } from '@taskly/types';

export async function fetchProjects() {
  const response = await api.get<ProjectSummary[]>('/v1/api/projects');
  return response.data;
}
