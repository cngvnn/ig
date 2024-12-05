const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
const postRoute = require("./routes/postRoute");
const followRoute = require("./routes/follow");
const cors = require("cors");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(userRoute);
app.use(postRoute);
app.use(followRoute);

const connenctDB = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGODB_URI);
    console.log("conn db");
  } catch (error) {
    console.log(error);
  }
};
connenctDB();
app.listen(8080, console.log("running server"));
