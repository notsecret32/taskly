import { ProjectService } from '@/project/project.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  async create(@Body() project: Prisma.ProjectCreateInput) {
    return this.projectService.create(project);
  }

  @Get()
  async getAll() {
    return this.projectService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.projectService.getById(id);
  }
}
