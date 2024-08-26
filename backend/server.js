import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import { connect } from "mongoose";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

//middleware
app.use("/api/auth", authRoutes);

console.log(process.env.MONGO_URI);

app.listen(8000, () => {
  console.log(`Server is running on port ${PORT}`);
  connectMongoDB();
});
