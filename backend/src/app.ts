import express, { Express } from 'express';
import httpContext from 'express-http-context';

//import router

//Config expess
const app: Express = express();
//output request log
app.use(httpContext.middleware);
app.use(express.json());
//Subsidy Router

// error handler

export default app;
