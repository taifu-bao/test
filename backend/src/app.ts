import express, { Express, Response, Request } from 'express';
import httpContext from 'express-http-context';
import * as dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser'
import morgan from 'morgan';

//import router

dotenv.config({ path: `.env.${process.env.NODE_ENV || 'local'}` });

//Config expess
const app: Express = express();
//output request log
app.use(httpContext.middleware);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(cors());
app.set('port', process.env.PORT || 8080);
//Subsidy Router

//Not in routes
app.use(function (_req: Request, res: Response) {
  res.status(404).json({ error: '404 not found' });
});

export default app;
