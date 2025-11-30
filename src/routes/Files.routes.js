import express from "express";
import path from "path";
import { fileURLToPath } from "url";  

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.route('/login').get((req, res) => {
    res.sendFile(path.join(__dirname ,'../../public/login.html'));
});
router.route('/register').get((req, res) => {
    res.sendFile(path.join(__dirname ,'../../public/register.html'));
});

export default router;