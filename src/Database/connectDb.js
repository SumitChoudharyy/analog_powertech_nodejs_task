import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';
import dotenv from 'dotenv';

dotenv.config();

const connectDb = async () => {
    try {
        const mongo = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log("Connected to database: ", mongo.connection.name);
    } catch (error) {
        console.log("Error connecting to database: ", error);
        throw error;
    }
}

export default connectDb;