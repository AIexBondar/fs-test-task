import express from 'express';
import cors from 'cors';
import {errorHandler} from "./middlewares/errorsHandlerMiddleware";
import {logger} from "./middlewares/loggerMiddleware";
import productRoutes from "./routes/productRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use('/api', productRoutes);

app.use(errorHandler);

export default app;