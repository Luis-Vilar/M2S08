const Companies = require("../models/companies");

async function validateCnpj(res, cnpj) {
  const company = await Companies.findOne({
    where: {
      cnpj,
    },
  });
  if (company) {
    return res.status(400).json({ error: "CNPJ já cadastrado" });
  }
}

function validateBody(res, body) {
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
    return res
      .status(400)
      .json({ error: "Dados Preencha todos os dados corretamente..." });
  }
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
    validateBody(res, req.body);
    validateCnpj(res, req.body.cnpj);
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
