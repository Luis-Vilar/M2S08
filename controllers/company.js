module.exports = {
  async index(req, res) {
    res.json({ message: "Index" });
  },
  async show(req, res) {
    res.json({ message: "Show " });

  },
  async store(req, res) {
    res.json({ message: "Store" });

  },
  async update(req, res) {
    res.json({ message: "Update" });

  },
  async destroy(req, res) {
    res.json({ message: "Destroy" });

  },
};
