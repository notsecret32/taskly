import { PrismaModule } from '@/prisma/prisma.module';
import { TaskController } from '@/task/task.controller';
import { TaskService } from '@/task/task.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
