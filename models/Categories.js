const mongoose = require("mongoose");

const CategoriesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    Products: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    // size: { type: Array },
    // color: { type: Array },
    // price: { type: Number, required: true },
    // inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("category", CategoriesSchema);
