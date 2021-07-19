import { IsEnum, IsString } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class GetTasksFilterDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;

  @IsString()
  search: string;
}
