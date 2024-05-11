import { NextFunction, Request, Response } from 'express';
import authService from './auth.service';

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await authService.login(req.body.email);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export default {
  login,
};
