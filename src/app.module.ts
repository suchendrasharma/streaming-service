import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MyListModule } from './controllers/my-list.controller/my-list.module';
import { SharedModule } from './shared/services/shared.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/streaming_service'),
    SharedModule,
    MyListModule,
  ],
})
export class AppModule {}
