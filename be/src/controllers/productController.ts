import { Request, Response } from 'express';
import * as productService from '../services/productService';

const productController = {
    getAllProducts: async (req: Request, res: Response): Promise<void> => {
        try {
            const products = await productService.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            const err = error as Error;
            res.status(500).json({ error: err.message });
        }
    },
};

export default productController;
