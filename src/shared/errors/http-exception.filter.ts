import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  import { Request, Response } from 'express';
  
  function isHttpException(e: unknown): e is HttpException {
    return e instanceof HttpException;
  }
  
  @Catch()
  export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();
  
      if (isHttpException(exception)) {
        const status = exception.getStatus();
        const message = exception.getResponse();
        response.status(status).json({
          success: false,
          statusCode: status,
          message,
          path: request.url,
          timestamp: new Date().toISOString(),
        });
        return;
      }
  
      // fallback for non-HttpException errors
      console.error('Unexpected error:', exception);
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Internal server error',
        path: request.url,
        timestamp: new Date().toISOString(),
      });
    }
  }
  