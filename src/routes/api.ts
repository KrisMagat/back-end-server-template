import express, { Request, Response } from 'express';
const router = express.Router();

//write your middleware here or in a different file. 
//this is your middleware structure
const middleware = (req: Request, res: Response, next: any) => {
  try {
    res.send('Success!');
  }
  catch (err) {
    next(err);
  }
};

//you can create separate routers to serve different endpoints and different API's
router.get('/', middleware, (req, res) => res.status(200).send('Success!'));
router.post('/', middleware, (req, res) => res.status(200).send('Success!'));
router.put('/', middleware, (req, res) => res.status(200).send('Success!'));
router.delete('/', middleware, (req, res) => res.status(200).send('Success!'));

export { router as apiRouter };
