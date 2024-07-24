import User from '@/user/user.model';
import createHttpError from 'http-errors';
import httpStatus from 'http-status';

const login = async (email: string) => {
  const entity = await User.findOne({ where: { email } });
  if (!entity) {
    throw createHttpError(httpStatus.BAD_REQUEST, 'The email is invalid.');
  }

  return {
    accessToken: 'AUTH-TOKEN',
  };
};

export default {
  login,
};
