const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to Mongo DB"))
  .catch((error) => {
    console.log(error);
  });

app.use("/api/auth", authRoute);

app.listen("5000", () => {
  console.log("Backend is running!");
});
