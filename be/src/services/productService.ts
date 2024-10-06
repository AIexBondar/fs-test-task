import Product from '../models/Product';

export const getAllProducts = () => Product.find();
