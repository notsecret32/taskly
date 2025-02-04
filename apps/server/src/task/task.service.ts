import { PrismaService } from '@/prisma/prisma.service';
import { TaskCreateDto } from '@/task/dto';
import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { Task, TaskSummary } from '@taskly/types';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  async create({ title, projectId }: TaskCreateDto): Promise<Task> {
    const taskByTitle = await this.prisma.task.findFirst({
      where: {
        title,
      },
    });

    if (taskByTitle) {
      throw new ConflictException('A task with this title already exists');
    }

    const taskByProjectId = await this.prisma.task.findFirst({
      where: {
        projectId,
      },
    });

    if (!taskByProjectId) {
      throw new BadRequestException('There is no project with this id');
    }

    return this.prisma.task.create({
      data: {
        title,
        projectId,
      },
    });
  }

  async getAll(body: { projectId: string }): Promise<TaskSummary[]> {
    const { projectId } = body;
    return this.prisma.task.findMany({ where: { projectId } });
  }

  async getById(id: string): Promise<Task | null> {
    return this.prisma.task.findFirst({
      where: {
        id,
      },
    });
  }
}
