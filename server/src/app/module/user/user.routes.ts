import express from 'express';
import { UserController } from './user.controller';
import upload from '../../../shared/multer';

const router = express.Router();

router.get('/', UserController.getAllFromDB);
router.post('/img', upload.single('image'), UserController.createImage);
router.post('/user', UserController.createUser);

export const UserRouter = router;
