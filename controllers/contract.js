module.exports = {
  async index(req, res) {
    res.json({ message: "Index" });
  },
  async show(req, res) {
    res.json({ message: "Show " });

  },
};
