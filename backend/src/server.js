import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
// local imports
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/DB.js";
// import routes
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

// create express app
const app = express();
const { PORT } = ENV;

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// routes 
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

// listen on port
connectDB().then(()=>{
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})