import { Router } from 'express';
import validator from '@/common/middleware/validator.middleware';
import userController from './user.controller';
import * as v from './user.validation';

const router = Router();
router.get('/', userController.find);
router.get('/:id', userController.findById);
router.post('/', validator(v.create), userController.create);
router.put('/:id', validator(v.update), userController.update);
router.delete('/:id', userController.destroy);

export default router;
