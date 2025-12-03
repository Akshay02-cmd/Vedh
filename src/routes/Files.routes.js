import express from "express";
import authmiddeleware from '../middelwares/auth.middelware.js';
import FetchFile from "../utils/FetchFile.js";
import File from '../controllers/file.controller.js';


const router = express.Router();


router.route('/').get(File('index.html'));

router.route('/login').get(File('login.html'));
router.route('/register').get(File('register.html'));

router.route('/dashboard').get(authmiddeleware, File('dashboard.html'));
router.route('/profile').get(File('profile.html'));


export default router;