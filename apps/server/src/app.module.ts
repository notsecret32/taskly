import { ProjectModule } from '@/project/project.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ProjectModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
