import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MyList, MyListSchema } from 'src/shared/schemas/my-list.schema';
import { MyListController } from './my-list.controller';
import { MyListService } from './my-list.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: MyList.name, schema: MyListSchema }])],
  controllers: [MyListController],
  providers: [MyListService],
})
export class MyListModule {}
