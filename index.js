/** @format */

const express = require("express");
const connectDB = require("./config/dbConnection");
const { errorHandeler } = require("./middleware/errorHandeler");
const dotenv = require("dotenv").config();
const cors = require("cors");

connectDB();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/api/users", require("./routers/userRouter"));
app.use(errorHandeler);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
