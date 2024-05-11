import { z } from 'zod';

const body = z.object({
  username: z.string().trim().max(10),
  email: z.string().trim().email().max(40),
  phone: z.string().trim().max(10),
});

export const find = {
  query: z
    .object({
      filters: z
        .object({
          username: z.string().trim().optional(),
          email: z.string().trim().optional(),
          phone: z.string().trim().optional(),
        })
        .partial()
        .optional(),
      limit: z.number().optional().transform(Number),
      offset: z.number().optional().transform(Number),
      sort: z.string().or(z.array(z.string())).optional(),
      fields: z.string().or(z.array(z.string())).optional(),
    })
    .partial(),
};

export const create = {
  body,
};

export const update = {
  body: body.partial(),
};
