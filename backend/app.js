// /** @format */

// const express = require("express");
// const connectDB = require("./config/db");
// const products = require("./routes/productRoutes");
// const orders = require("./routes/orderRoutes");
// const auth = require("./routes/authRoutes");

// connectDB();

// const app = express();

// app.use(express.json());

// app.use("/api/v1/products", products);
// app.use("/api/v1/orders", orders);
// app.use("/api/v1/auth", auth);

// module.exports = app;


/** @format */

const express = require('express');
const connectDB = require('./config/db');
const products = require('./routes/productRoutes');
const orders = require('./routes/orderRoutes');
const auth = require('./routes/authRoutes');  // Ensure path is correct

connectDB();

const app = express();

app.use(express.json());

app.use('/api/products', products);
app.use('/api/orders', orders);
app.use('/api/auth', auth);  // Authentication routes

module.exports = app;
