import { IsString, MaxLength, MinLength } from 'class-validator';

export class TaskCreateDto {
  @IsString()
  @MinLength(4, {
    message: 'The title must consist of a minimum of 4 characters.',
  })
  @MaxLength(21, {
    message: 'The title must consist of a maximum of 21 characters.',
  })
  title: string;

  @IsString()
  projectId: string;
}
