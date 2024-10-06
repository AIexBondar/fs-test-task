import { Router } from 'express';
import productController from '../controllers/productController';

const router = Router();

router.get('/all-products', productController.getAllProducts);

export default router;
