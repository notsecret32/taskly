import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaService) {}

  async create(project: Prisma.ProjectCreateInput) {
    return this.prisma.project.create({ data: project });
  }

  async getAll() {
    return this.prisma.project.findMany({
      select: {
        id: true,
        name: true,
      },
    });
  }

  async getById(id: string) {
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
