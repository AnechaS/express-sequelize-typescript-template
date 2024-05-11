import request from 'supertest';
import app from '@/app';
import userService from '@/user/user.service';

jest.mock('@/user/user.service', () => ({
  find: jest.fn().mockResolvedValue([]),
}));

const mockedUserService = jest.mocked(userService);

afterEach(() => {
  jest.clearAllMocks();
});

describe('GET /v1/users', () => {
  test('should get user', async () => {
    const users: any[] = [
      {
        id: 1,
        username: 'a',
        email: 'a@email.com',
        phone: '1234567890',
      },
    ];
    mockedUserService.find.mockResolvedValue(users);

    const response = await request(app).get('/v1/users');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(users);

    expect(mockedUserService.find).toHaveBeenCalledTimes(1);
    expect(mockedUserService.find).toHaveBeenCalledWith({});
  });
});
