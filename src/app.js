import express from 'express';
const app = express();

// security packages
import helmet from 'helmet';
import cors from 'cors';
import rateLimiter from 'express-rate-limit';

// middlewares(error handling)
import ErrorhandlerMiddelware from './middelwares/errorMiddelwares/Error-handle.Middelwares.js';
import notFoundMiddelware from './middelwares/errorMiddelwares/Not-found.Middelwares.js';

// to handle __dirname 
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// routes
import authRouter from './routes/auth.routes.js';
import commonRouter from './routes/Files.routes.js';

// extra security packages
app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, //15 minutes
    max: 100, //limit each IP to 100 requests per windowMs
    standardHeaders: true,
    legacyHeaders: false,
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/auth/', authRouter);
app.use('/', commonRouter);

app.use(notFoundMiddelware);
app.use(ErrorhandlerMiddelware);

export default app;