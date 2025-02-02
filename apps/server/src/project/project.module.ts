import { PrismaModule } from '@/prisma/prisma.module';
import { ProjectController } from '@/project/project.controller';
import { ProjectService } from '@/project/project.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
