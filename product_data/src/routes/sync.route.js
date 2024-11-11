import { Router } from 'express';

import { syncHandler, getProducts, createProducts, createHello } from '../controllers/sync.controller.js';

const syncRouter = Router();

// syncRouter.post('/:storeKey', syncHandler);

// syncRouter.post('/:productId', getProducts);

syncRouter.post('/', createProducts);

// syncRouter.get('/hello', createHello);







export default syncRouter;
