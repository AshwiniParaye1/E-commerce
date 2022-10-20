const router = require("express").Router();
const Category = require("../models/Categories");

router.post("/create", async (req, res) => {
  console.log("request:", req);
  const newCat = new Category(req.body);
  try {
    const saveCat = await newCat.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
