import express from 'express';
import { getUser } from '../controllers/userControllers.js';

const router = express.Router();

// post /user/login -> token
router.post("/login", getUser)
// post /user/singup -> create new user 
// router.post("/signup")


export default router;