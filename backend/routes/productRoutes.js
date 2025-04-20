/** @format */

const express = require("express");
const { protect, authorize, admin } = require("../middleware/auth");
const {
  deleteProduct,
  getProducts,
  createProduct,
} = require("../controllers/productController");

const router = express.Router();
router.delete('/:id', protect, admin, deleteProduct);
router
  .route("/")
  .get(getProducts)
  .post(protect, authorize("admin"), createProduct);//.post(protect, authorize("admin"), createProduct);

module.exports = router;
