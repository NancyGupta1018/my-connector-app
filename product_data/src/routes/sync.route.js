import { Router } from 'express';

import { createHello } from '../controllers/sync.controller.js';

const syncRouter = Router();

syncRouter.get('/hello', createHello);



export default syncRouter;
