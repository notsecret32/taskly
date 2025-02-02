import { ProjectService } from '@/project/project.service';
import { Body, Controller, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Controller()
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('projects')
  async createProject(@Body() project: Prisma.ProjectCreateInput) {
    return this.projectService.create(project);
  }
}
