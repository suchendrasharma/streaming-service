import { IsNotEmpty, IsString } from 'class-validator';

export class RemoveFromListDto {
  @IsString() 
  @IsNotEmpty()
  userId: string;

  @IsString() 
  @IsNotEmpty()
  contentId: string;
}
