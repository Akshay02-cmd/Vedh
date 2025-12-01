import express from "express";
import authmiddeleware from '../middelwares/auth.middelware.js';
import FetchFile from "../utils/FetchFile.js";


const router = express.Router();


router.route('/').get((req, res) => {
    res.sendFile(FetchFile('index.html'));
});

router.route('/login').get((req, res) => {
    res.sendFile(FetchFile('login.html'));
});

router.route('/register').get((req, res) => {
    res.sendFile(FetchFile('register.html'));
});

router.route('/dashboard').get(authmiddeleware, (req, res) => {
    res.sendFile(FetchFile('dashboard.html'));
});



export default router;