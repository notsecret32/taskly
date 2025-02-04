import api from '@/api';
import { CreateProjectInput, Project, ProjectSummary } from '@taskly/types';

export async function createProject(data: CreateProjectInput) {
  const response = await api.post<ProjectSummary>('/v1/api/projects', data);
  return response.data;
}

export async function fetchProjects() {
  const response = await api.get<ProjectSummary[]>('/v1/api/projects');
  return response.data;
}

export async function fetchProjectById(id: string) {
  const response = await api.get<Project>(`/v1/api/projects/${id}`);
  return response.data;
}
