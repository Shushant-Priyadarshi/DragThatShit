import { Request, Response, NextFunction } from 'express';
import { ApiError } from './ApiError';

export type AsyncRequestHandler<
  TRequest extends Request = Request,
  TResponse extends Response = Response
> = (
  req: TRequest,
  res: TResponse,
  next: NextFunction
) => Promise<void | Response>;


const asyncHandler = <TRequest extends Request = Request, TResponse extends Response = Response>(fn: AsyncRequestHandler<TRequest, TResponse>
) => {
  return async (req: TRequest, res: TResponse, next: NextFunction): Promise<void> => {
    try {
      await fn(req, res, next);
    } catch (error) {
      // Type guard to check if error is an instance of ApiError
      if (error instanceof ApiError) {
        res.status(error.statusCode).json({
          success: false,
          message: error.message,
          errors: error.errors
        });
      } else if (error instanceof Error) {
        // Handle standard JavaScript errors
        res.status(500).json({
          success: false,
          message:error.message,
        });
      } else {
        // Handle unknown error types
        res.status(500).json({
          success: false,
          message: 'Internal Server Error'
        });
      }
    }
  };
};

export {asyncHandler };
