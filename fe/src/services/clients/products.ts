import axios from "axios";

const productsClient = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000
})

export default productsClient;
