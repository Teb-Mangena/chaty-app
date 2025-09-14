import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  const { MONGO_URL } = ENV;

  try {
    await mongoose.connect(MONGO_URL);

    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error in the DB file :",error);
    process.exit(1);
  }
}