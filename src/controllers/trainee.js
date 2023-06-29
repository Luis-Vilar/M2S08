const Trainee = require("../models/trainee");

/*
Validar o corpo da requisição */
function validateBody(body) {
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
  } = body;
  if (
    !name ||
    !email ||
    !rg ||
    !cpf ||
    !primary_phone_contact ||
    !secondary_phone_contact ||
    !date_birth ||
    !father_name ||
    !mother_name ||
    !have_special_needs
  ) {
    return false;
  }
  return true;
}

/***Não permitir cadastrar estagiários com cpf e RG igual */
async function validateCpfAndRg(cpf, rg) {
  const trainee = await Trainee.findOne({
    where: {
      cpf,
      rg,
    },
  });
  if (trainee) {
    return false;
  }
  return true;
}

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
    if (!validateBody(req.body)) {
      res.status(400).json({ error: "Preencha todos os campos" });
      return;
    }
    if (!(await validateCpfAndRg(cpf, rg))) {
      res.status(400).json({ error: "CPF e RG já cadastrados" });
      return;
    }


    var trainee = null;

    try {
      trainee = await Trainee.create({
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
        create_at: new Date(Date.now()),
        updated_at: new Date(Date.now()),
      });
    } catch (error) {
      res.status(400).json({
        error:
          `Erro ao cadastrar estagiário : ${error.name}`  ,
      });
      return;
    }

    res.status(201).json(trainee);
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

    const trainee = await Trainee.update({
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
