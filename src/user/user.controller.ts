import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import userService from './user.service';

const find = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userService.find(req.query);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const findById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userService.findById(req.params.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userService.create(req.body);
    res.status(httpStatus.CREATED).json(result);
  } catch (error) {
    next(error);
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userService.update(req.params.id, req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await userService.destroy(req.params.id);
    res.status(httpStatus.NO_CONTENT).json({});
  } catch (error) {
    next(error);
  }
};

export default {
  find,
  findById,
  create,
  update,
  destroy,
};
