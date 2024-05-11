import request from 'supertest';
import createHttpError from 'http-errors';
import app from '@/app';
import logger from '@/common/logger';

const mockedCreateHttpError = jest.mocked(createHttpError);

jest.mock('http-errors');
jest.mock('@/common/logger');

afterEach(() => {
  jest.clearAllMocks();
});

describe('Application', () => {
  test('should report error when route not found', async () => {
    mockedCreateHttpError.mockImplementation((...args) => jest.requireActual('http-errors')(...args));

    const response = await request(app).get('/abc');

    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      statusCode: 404,
      message: 'Not Found',
    });
    expect(logger.error).not.toHaveBeenCalled();
  });

  test('should report error when error without message and status', async () => {
    mockedCreateHttpError.mockReturnValue({} as any);

    const response = await request(app).get('/abc');

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      statusCode: 500,
      message: 'Internal Server Error',
    });
    expect(logger.error).toHaveBeenCalled();
  });
});
