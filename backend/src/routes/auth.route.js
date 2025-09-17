import express from 'express';
import { signupUser } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signupUser);

router.get('/login', (req, res) => {
  res.send('Login route');
});

router.get('/logout', (req, res) => {
  res.send('Logout route');
});

export default router;