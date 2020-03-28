const router = require("express").Router();
const Product = require("../models/product");

const upload = require("../middlewares/upload-photo");

// title: String,
//  description: String,
//  photo: String,
//  price: Number,
//  stockQuantity: Number,
//  rating: [Number]

// POST request - create a new product 
router.post("/products", upload.single("photo"), async (req, res) => {
 try {
  let product = new Product();

  product.title = req.body.title;
  product.description = req.body.description;
  product.photo = req.file.location;
  product.stockQuantity = req.body.stockQuantity;

  await product.save();

  res.json({
   status: true,
   message: "Successfully Saved!!"
  });


 } catch (err) {
  res.status(500).json({
   success: false,
   message: err.message
  });
 }

});

// GET request - get all products



// GET request - get a single product



// PUT request - create a new product 



// DELETE request - delete a new product 


module.exports = router;