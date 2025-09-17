import express from 'express';
import { loginUser, logoutUser, signupUser, updateProfile } from '../controllers/auth.controller.js';
import { protectRoute } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/signup', signupUser);

router.post('/login', loginUser);

router.post('/logout', logoutUser);

router.put('/update-profile', protectRoute , updateProfile)

router.get('/check', protectRoute, (req,res) => res.status(200).json(req.user)
);

export default router;