import { Router } from 'express';



import { helloworld } from '../controllers/tax.calculator.controller.js';

const taxCalculatorRouter = Router();



taxCalculatorRouter.get('/hello', helloworld);

export default taxCalculatorRouter;
