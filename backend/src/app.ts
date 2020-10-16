import express, { Application, NextFunction, Request, Response } from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';

const main = async () => {
  const app: Application = express();

  app.use(compression());
  app.use(express.json());
  app.use(cookieParser());

  app.use(async function authorize(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    /* Authorize the user */
  });

  app.get('/clients', async (req, res) => {
    /* Get info about clients */
  });

  app.get('/clients:id', async (req, res) => {
    /* Get info about client */
  });

  app.post('/clients', async (req, res) => {
    /* Create new client */
  });

  app.delete('/clients:id', async (req, res) => {
    /* Delete client from DB */
  });

  app.put('/clients:id', async (req, res) => {
    /* Update info about requested client */
  });

  app.get('/departments:id', async (req, res) => {
    /* Get info about department */
  });

  app.get('/departments', async (req, res) => {
    /* Get info about departments */
  });

  app.post('/departments', async (req, res) => {
    /* Create new department */
  });

  app.delete('/departments:id', async (req, res) => {
    /* Delete department */
  });

  app.put('/departments:id', async (req, res) => {
    /* Update info about department */
  });

  app.listen(process.env.PORT || 4000, () => {
    console.log(
      `Express server is listening on port ${process.env.PORT || 4000}`
    );
  });
};

main();
