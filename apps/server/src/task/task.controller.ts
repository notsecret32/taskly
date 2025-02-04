import { TaskCreateDto, TaskGetAllDto } from '@/task/dto';
import { TaskService } from '@/task/task.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(@Body() task: TaskCreateDto) {
    return this.taskService.create(task);
  }

  @Get()
  async getAll(@Body() body: TaskGetAllDto) {
    return this.taskService.getAll(body);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.taskService.getById(id);
  }
}
