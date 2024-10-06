import {IProduct} from "../interfaces/product";

const fixDateDBType = (products: IProduct[]): IProduct[] => {
  return products.map((product: IProduct) => ({
      ...product,
      price: {
        ...product.price,
        validFrom: new Date(product.price.validFrom),
        validTo: new Date(product.price.validTo)
      }
    })
  )
}

export default fixDateDBType;
