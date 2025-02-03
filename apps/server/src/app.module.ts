import { ProjectModule } from '@/project/project.module';
import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';

@Module({
  imports: [ProjectModule, TaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
