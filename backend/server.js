/** @format */
require('dotenv').config();
const express=require('express')
const cors = require('cors')

const app = require("./app");
app.use(cors({
  origin: "*",
  methods: "GET, POST, PUT, DELETE", 
   credentials: true,
},));
app.use(express.json())

const connectDB = require("./config/db")


connectDB();
const PORT = process.env.PORT || 5000;
app.get("/", () => {
  console.log("Working");
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
  