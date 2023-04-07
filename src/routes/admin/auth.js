import express from 'express';
import {signup, signin, requireSignin} from '../../controller/admin/auth.js';
const router = express.Router();

router.post('/admin/signup', signup);
router.post('/admin/signin', signin);

export default router;
