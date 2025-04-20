// /** @format */

// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log(
//       "MongoDB connected:",
//       mongoose.connection.host,
//       mongoose.connection.name
//     );
    
//   } catch (err) {
//     console.error("Database connection error:", err.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

/** @format */

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Database connection error: ', err.message);
    process.exit(1);  // Exit process with failure
  }
};

module.exports = connectDB;
