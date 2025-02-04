import { PrismaService } from '@/prisma/prisma.service';
import { ProjectCreateDto } from '@/project/dto';
import { ConflictException, Injectable } from '@nestjs/common';
import { Project, ProjectSummary } from '@taskly/types';

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaService) {}

  async create({ name }: ProjectCreateDto): Promise<Project> {
    const project = await this.prisma.project.findFirst({
      where: {
        name,
      },
    });

    if (project) {
      throw new ConflictException('A project with this name already exists');
    }

    return this.prisma.project.create({ data: { name } });
  }

  async getAll(): Promise<ProjectSummary[]> {
    return this.prisma.project.findMany({
      select: {
        id: true,
        name: true,
      },
    });
  }

  async getById(id: string): Promise<Project | null> {
    return this.prisma.project.findFirst({
      where: {
        id,
      },
      include: {
        tasks: true,
      },
    });
  }
}
