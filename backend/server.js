import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import { connect } from "mongoose";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //to parse from data

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/auth", authRoutes);

console.log(process.env.MONGO_URI);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectMongoDB();
});
