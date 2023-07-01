const Category = require("../models/category");

module.exports = {
  async index(req, res) {
    const categories = await Category.findAll();

    return res.json(categories);
  },
  async store(req, res) {
    const { name, created_at } = req.body;

    const category = await Category.create({
      name,
      created_at,
      updated_at: Date.now(),
    });

    return res.json(category);
  },
};
