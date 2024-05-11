import { z } from 'zod';

export const login = {
  body: z.object({
    email: z.string().trim().email().max(40),
  }),
};
