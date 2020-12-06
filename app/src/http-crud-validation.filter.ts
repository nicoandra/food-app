import { ExceptionFilter, Catch, ArgumentsHost, UnprocessableEntityException } from '@nestjs/common';
import { Request, Response } from 'express';
import { Error as mongooseError} from 'mongoose'

@Catch(mongooseError.ValidationError)
export class HttpCrudValidationFilter implements ExceptionFilter {
  catch(exception: mongooseError.ValidationError, host: ArgumentsHost) {
    const statusCode = 400
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    response
      .status(statusCode)
      .json({
        statusCode,
        timestamp: new Date().toISOString(),
        path: request.url,
        message: exception.message
      });
  }
}