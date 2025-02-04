import api from '@/api';
import { Project, ProjectSummary } from '@taskly/types';

export async function fetchProjects() {
  const response = await api.get<ProjectSummary[]>('/v1/api/projects');
  return response.data;
}

export async function fetchProjectById(id: string) {
  const response = await api.get<Project>(`/v1/api/projects/${id}`);
  return response.data;
}
