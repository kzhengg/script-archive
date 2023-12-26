import mongoose from "mongoose";
import 'dotenv/config'

let isConnected = false;

export const connect = async () => {
  if (!isConnected) {
    await mongoose.connect(
      process.env.DB_CONNECTION
    );
    isConnected = true;
  }
};