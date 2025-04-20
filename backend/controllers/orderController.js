/** @format */

const { response } = require("express");
const Order = require("../models/Order");
const mongoose = require("mongoose");


exports.createOrder = async (req, res) => {
  try {
    req.body.user = req.user.id;
    const order = await Order.create(req.body);

    res.status(201).json({
      success: true,
      data: order,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

exports.getOrders = async (req, res) => {
  const {user} = req;
  // if (user.role==="admin"){
  //   const order = await Order.find()
  //   console.log(order);
  //   return
  // }
  try {
    if (user.role!=="admin"){
      return res.status(401).json({message:"unauthorized - only admins can access"});
    }
    const orders = await Order.find();
    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

// exports.getOrderById = async (req, res) => {
//   try {
//     const order = await Order.findById(req.params.id)
//       .populate("items.product", "name price")
//       .populate("user", "name email");

//     if (!order) {
//       return res.status(404).json({ success: false, error: "Order not found" });
//     }

//     // Only the user who placed the order can access it
//     if (order.user._id.toString() !== req.user._id.toString()) {
//       return res.status(403).json({ success: false, error: "Unauthorized" });
//     }

//     res.status(200).json({ success: true, data: order });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, error: "Server error" });
//   }
// };

// exports.getOrderById = async (req, res) => {
//   const { id } = req.params;

//   console.log("Received order ID:", id);  // Log the ID for debugging

//   // Check if the ID is a valid ObjectId
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({ success: false, error: "Invalid order ID format" });
//   }

//   try {
//     const order = await Order.findById(id)
//       .populate("items.product", "name price") // Populate product name and price
//       .populate("user", "name email"); // Populate user details

//     if (!order) {
//       return res.status(404).json({ success: false, error: "Order not found" });
//     }

//     // Only allow the user who created the order to access it
//     if (order.user._id.toString() !== req.user._id.toString()) {
//       return res.status(403).json({ success: false, error: "Unauthorized" });
//     }

//     res.status(200).json({ success: true, data: order });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, error: "Server error while fetching order" });
//   }
// };

// @desc    Get order by ID (for buyer)
// @route   GET /api/orders/:id
// @access  Private
exports.getOrderById = async (req, res) => {
  const { id } = req.params;
  console.log('Received order ID:', id);
  const {user} = req;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, error: 'Invalid order ID' });
    }
    

    const order = await Order.findById(id).populate('user', 'name email');
    console.log(order);



    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }

    // Optional: Only allow the order's owner to view it
    // if (order.user._id.toString() !== req.user.id) {
    //   return res.status(403).json({ success: false, error: 'Access denied' });
    // }

    res.status(200).json({ success: true, data: order });
  } catch (err) {
    console.error('Order fetch error:', err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

exports.updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, error: 'Invalid order ID' });
    }

    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }

    order.status = status || order.status;
    const updatedOrder = await order.save();

    res.status(200).json({ success: true, data: updatedOrder });
  } catch (err) {
    console.error('Order update failed:', err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};
