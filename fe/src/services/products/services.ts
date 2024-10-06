import productsClient from "../clients/products";
import productsEndpoints from "./endpoints";

export const getAllProducts = () => {
  return productsClient.get(productsEndpoints['all-products'])
}
