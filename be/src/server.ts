import app from './app';
import connectDB from './config/db';
import { config } from './config';

const PORT = config.port || 5000;

const startServer = async () => {
    try {
        await connectDB();
        console.log('MongoDB connected');

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
        process.exit(1);
    }
};

startServer();
