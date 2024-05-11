import { Router } from 'express';
import validator from '@/common/middleware/validator.middleware';
import * as v from './auth.validation';
import authController from './auth.controller';

const router = Router();
router.post('/login', validator(v.login), authController.login);

export default router;
