import { IsString } from 'class-validator';

export class TaskGetAllDto {
  @IsString()
  projectId: string;
}
