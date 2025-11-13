import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { AllExceptionsFilter } from './shared/errors/http-exception.filter';

async function bootstrap() {
    const serviceName = process.env.SERVICE_NAME
    const serviceHost = process.env.HOST
    const servicePort = process.env.PORT

    const app = await NestFactory.create(AppModule, { cors: true });
    app.useGlobalFilters(new AllExceptionsFilter());
    app.setGlobalPrefix('api');
    await app.listen(`${servicePort}`);

    console.log(`Started ${serviceName} at http://${serviceHost}:${servicePort}`);
}
bootstrap();
