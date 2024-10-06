import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react';
import {IProduct} from "../interfaces/product";

export interface ProductsContextType {
  products: IProduct[]
  setProducts: (items: IProduct[]) => void;
}

const ProductContext = createContext<ProductsContextType>({
  products: [],
  setProducts: () => null
});

export const ProductsProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<ProductsContextType['products']>([]);

  const value = useMemo(
    () => ({
      products,
      setProducts
    }),
    [products]
  );

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductsProvider');
  }
  return context;
};
