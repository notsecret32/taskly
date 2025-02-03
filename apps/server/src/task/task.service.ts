import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  async create(task: { title: string; projectId: string }) {
    const { title, projectId } = task;
    return this.prisma.task.create({
      data: {
        title,
        projectId,
      },
      omit: {
        projectId: true,
      },
    });
  }

  async getAll(body: { projectId: string }) {
    const { projectId } = body;
    return this.prisma.task.findMany({ where: { projectId } });
  }

  async getById(id: string) {
    return this.prisma.task.findFirst({
      where: {
        id,
      },
    });
  }
}
