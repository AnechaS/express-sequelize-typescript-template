import createHttpError from 'http-errors';
import httpStatus from 'http-status';
import User from './user.model';
import { MESSAGE } from '@/common/constants';
import type { CreateUserValues, FindUserOptions, UpdateUserValues } from './user.interface';

// TODO: Filters data
const find = async (query?: FindUserOptions) => {
  return User.findAll();
};

// TODO: Filters data
const count = async (query?: FindUserOptions) => {
  return User.findAll();
};

const findById = async (id: string) => {
  const entity = await User.findOne({ where: { id } });
  if (!entity) {
    throw createHttpError(httpStatus.NOT_FOUND, MESSAGE.RESOURCE_NOT_FOUND);
  }

  return entity;
};

const create = async (data: CreateUserValues) => {
  const entity = await User.create(data);
  return entity;
};

const update = async (id: string, data: UpdateUserValues) => {
  const entity = await findById(id);
  const updated = await entity.update(data);
  return updated;
};

const destroy = async (id: string) => {
  const entity = await findById(id);
  return entity.destroy();
};

export default {
  find,
  count,
  findById,
  create,
  update,
  destroy,
};
