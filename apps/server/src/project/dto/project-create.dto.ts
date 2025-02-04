import { IsString, MaxLength, MinLength } from 'class-validator';

export class ProjectCreateDto {
  @IsString()
  @MinLength(4, {
    message: 'The name must consist of a minimum of 4 characters.',
  })
  @MaxLength(21, {
    message: 'The name must consist of a maximum of 21 characters.',
  })
  name: string;
}
