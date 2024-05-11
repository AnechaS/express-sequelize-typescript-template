import { z } from 'zod';
import * as v from './user.validation';

export type FindUserOptions = z.infer<typeof v.find.query>;
export type CreateUserValues = z.infer<typeof v.create.body>;
export type UpdateUserValues = z.infer<typeof v.update.body>;
