const Trainee = require("../models/trainee");

module.exports = {
  async index(req, res) {
    const trainee = await Trainee.findAll();
    res.json(trainee);
  },
  async show(req, res) {
    const { id } = req.params;
    const trainee = await Trainee.findByPk(id);
    res.json(trainee);
  },
  async store(req, res) {
    const {
      name,
      email,
      rg,
      cpf,
      primary_phone_contact,
      secondary_phone_contact,
      date_birth,
      father_name,
      mother_name,
      have_special_needs,
    } = req.body;

    const trainee = await Trainee.create({
      name,
      email,
      rg,
      cpf,
      primary_phone_contact,
      secondary_phone_contact,
      date_birth,
      father_name,
      mother_name,
      have_special_needs,
      created_at: new Date(Date.now()),
      updated_at: new Date(Date.now()),
    });
    res.json(trainee);
  },
  async update(req, res) {
    const { id } = req.params;
    const {
      name,
      email,
      rg,
      cpf,
      primary_phone_contact,
      secondary_phone_contact,
      date_birth,
      father_name,
      mother_name,
      have_special_needs,
    } = req.body;

    const trainee = await Trainee.update(
      {
        name,
        email,
        rg,
        cpf,
        primary_phone_contact,
        secondary_phone_contact,
        date_birth,
        father_name,
        mother_name,
        have_special_needs,
        updated_at: new Date(Date.now()),


  });
    res.json(trainee);
  },
};
