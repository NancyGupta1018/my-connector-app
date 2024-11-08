import { Router } from 'express';

import { syncHandler, getProducts, createProducts } from '../controllers/sync.controller.js';

const syncRouter = Router();

// syncRouter.post('/:storeKey', syncHandler);

// syncRouter.post('/:productId', getProducts);

syncRouter.post('/', createProducts);





export default syncRouter;
