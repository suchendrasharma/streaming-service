import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { MyListService } from './my-list.service';
import { AddToListDto } from 'src/shared/dtos/add-to-list.dto';
import { RemoveFromListDto } from 'src/shared/dtos/remove-from-list.dto';

@Controller('my-list')
export class MyListController {
  constructor(private readonly myListService: MyListService) {}

  @Post('add')
  addToList(@Body() dto: AddToListDto) {
    const headers = "user_id";
    return this.myListService.addToList(dto, headers);
  }

  @Post('remove')
  removeFromList(@Body() dto: RemoveFromListDto) {
    const headers = 'user_id';
    return this.myListService.removeFromList(dto, headers);
  }

  @Get()
  getList(
    @Query('userId') userId: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.myListService.getList(userId, Number(page) || 1, Number(limit) || 10);
  }
}
