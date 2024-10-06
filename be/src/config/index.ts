import dotenv from 'dotenv';

dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    mongoURI: process.env.MONGODB_URI ?? 'mongodb://mongodb:27017/defaultdb',
};