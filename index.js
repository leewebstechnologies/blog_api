const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to Mongo DB"))
  .catch((error) => {
    console.log(error);
  });

app.use("/leewebs", (req, res) => {
  console.log("Hey this is leewebs url!");
});

app.listen("5000", () => {
  console.log("Backend is running!");
});
