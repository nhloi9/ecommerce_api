import express from 'express';
import {signup, signin, requireSignin} from '../controller/auth.js';
const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);

// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({ user: 'profile' })
// });

export default router;
