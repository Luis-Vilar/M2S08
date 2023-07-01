const Companies = require("../models/companies");

async function validateCnpj(cnpj) {
  const company = await Companies.findOne({
    where: {
      cnpj,
    },
  });
  const existe = company ? true : false;
  return existe;
}

function validateBody(body) {
  const {
    cnpj,
    company_name,
    contact,
    cep,
    address,
    neighborhood,
    city,
    state,
    number,
    complement,
    rh_analyst_name,
    supervisor_name,
  } = body;
  if (
    !cnpj ||
    !company_name ||
    !contact ||
    !cep ||
    !address ||
    !neighborhood ||
    !city ||
    !state ||
    !number ||
    !complement ||
    !rh_analyst_name ||
    !supervisor_name
  ) {
    return false;
  }
  return true;
}
module.exports = {
  async index(req, res) {
    const companies = await Companies.findAll();
    res.json(companies);
  },
  async show(req, res) {
    const { id } = req.params;
    const company = await Companies.findByPk(id);
    res.json(company);
  },
  async store(req, res) {
    const validar = validateBody(req.body);
    const existe = await validateCnpj(req.body.cnpj);
    if (existe) {
      return res.status(400).json({ error: "CNPJ já cadastrado" });
    }
    if (!validar) {
      return res.status(400).json({ error: "Dados inválidos" });
    } else {
      const {
        cnpj,
        company_name,
        contact,
        cep,
        address,
        neighborhood,
        city,
        state,
        number,
        complement,
        rh_analyst_name,
        supervisor_name,
      } = req.body;
      const company = await Companies.create({
        cnpj,
        company_name,
        contact,
        cep,
        address,
        neighborhood,
        city,
        state,
        number,
        complement,
        rh_analyst_name,
        supervisor_name,
      });
      res.json(company);
    }
  },
  async update(req, res) {
    const { id } = req.params;
    const {
      cnpj,
      company_name,
      contact,
      cep,
      address,
      neighborhood,
      city,
      state,
      number,
      complement,
      rh_analyst_name,
      supervisor_name,
    } = req.body;
    const company = await Companies.update(
      {
        cnpj,
        company_name,
        contact,
        cep,
        address,
        neighborhood,
        city,
        state,
        number,
        complement,
        rh_analyst_name,
        supervisor_name,
      },
      {
        where: {
          id,
        },
      }
    );
    res.json(company);
  },
};
