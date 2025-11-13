import { IsOptional, IsNumberString } from 'class-validator';

export class PaginateDto {
  @IsOptional() 
  @IsNumberString()
  page?: number;

  @IsOptional() 
  @IsNumberString()
  limit?: number;
}
