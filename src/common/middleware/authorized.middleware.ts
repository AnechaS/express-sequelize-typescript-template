import { NextFunction, Request, Response } from 'express';

export default function authorized() {
  return async (req: Request, res: Response, next: NextFunction) => {
    next();
  };
}
