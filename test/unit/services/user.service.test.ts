import { User } from '@/user/user.model';
import userService from '@/user/user.service';

jest.mock('@/user/user.model');

afterEach(() => {
  jest.clearAllMocks();
});

describe('userService', () => {
  describe('find', () => {
    test('should get entities', async () => {
      const users: any[] = [
        {
          id: 1,
          username: 'a',
          email: 'a@email.com',
          phone: '1234567890',
        },
      ];
      jest.spyOn(User, 'findAll').mockResolvedValue(users);

      const results = await userService.find();

      expect(results).toEqual(users);
      expect(User.findAll).toHaveBeenCalledTimes(1);
    });
  });
});
