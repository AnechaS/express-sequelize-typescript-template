import { NextFunction, Request, Response } from 'express';
import { ZodObject } from 'zod';

export interface ValidationSchema {
  params?: ZodObject<any>;
  query?: ZodObject<any>;
  headers?: ZodObject<any>;
  cookies?: ZodObject<any>;
  body?: ZodObject<any>;
}

// TODO: implement validator middleware
export default function validator(schema: ValidationSchema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    next();
  };
}
