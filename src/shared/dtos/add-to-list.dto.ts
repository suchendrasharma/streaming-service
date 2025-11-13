import { IsNotEmpty, IsString } from 'class-validator';

export class AddToListDto {
  @IsString() 
  @IsNotEmpty()
  userId: string;

  @IsString() 
  @IsNotEmpty()
  contentId: string;

  @IsString() 
  @IsNotEmpty()
  type: string;
}
