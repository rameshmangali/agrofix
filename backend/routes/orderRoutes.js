/** @format */

const express = require("express");
const { protect, admin } = require("../middleware/auth");
const { createOrder, getOrders, updateOrderStatus} = require("../controllers/orderController");
const { deleteProduct } = require("../controllers/productController")
const { getOrderById } = require("../controllers/orderController");

const router = express.Router();

router.route("/:id").get(protect, getOrderById);
router.route("/").get(protect, getOrders).post(protect, createOrder);
router.put('/:id', protect, admin, updateOrderStatus);
router.delete('/:id', protect, admin, deleteProduct);


module.exports = router;
