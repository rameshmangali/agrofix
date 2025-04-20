// /** @format */

// const express = require("express");
// const { register, login } = require("../controllers/authController");

// const router = express.Router();

// router.post("/register", register);
// router.post("/login", login);

// module.exports = router;

const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController'); // Ensure correct path to authController

// User registration route
router.post('/register', register);

// User login route
router.post('/login', login);

module.exports = router;
