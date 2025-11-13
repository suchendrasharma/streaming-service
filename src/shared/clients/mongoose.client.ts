import { MongooseModule } from '@nestjs/mongoose';

export const DatabaseClient = MongooseModule.forRootAsync({
  useFactory: () => ({
    uri: process.env.MONGO_URI,
    dbName: 'streaming_service',
  }),
});
