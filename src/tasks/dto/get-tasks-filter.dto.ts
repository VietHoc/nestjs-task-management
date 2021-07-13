import { IsEnum, IsString } from 'class-validator';
import { TaskStatus } from '../tasks.model';

export class GetTasksFilterDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;

  @IsString()
  search: string;
}
