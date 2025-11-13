import { Controller, Get, Post, Body, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { MyListService } from './my-list.service';
import { AddToListDto } from 'src/shared/dtos/add-to-list.dto';
import { RemoveFromListDto } from 'src/shared/dtos/remove-from-list.dto';

@Controller('my-list')
export class MyListController {
  constructor(private readonly myListService: MyListService) {}

  @Post('add')
  addToList(@Req() req: Request, @Body() dto: AddToListDto) {
    const userId = (req as any).user.id;
    return this.myListService.addToList({ ...dto, userId });
  }

  @Post('remove')
  removeFromList(@Req() req: Request, @Body() dto: RemoveFromListDto) {
    const userId = (req as any).user.id;
    return this.myListService.removeFromList({ ...dto, userId });
  }

  @Get()
  getList(@Req() req: Request, @Query('page') page?: number, @Query('limit') limit?: number) {
    const userId = (req as any).user.id;
    return this.myListService.getList(userId, Number(page) || 1, Number(limit) || 10);
  }
}
