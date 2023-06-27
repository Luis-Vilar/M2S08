const Contract = require("../models/contracts");

/**Todo contrato ao ser criado, nasce como status TRUE.
Ao desativar um contrato, não é permitido ativar novamente .
Validar o corpo da requisição.
Ao listar os contratos no método index e show, utilizar o parâmetro include para exibir informações dos relacionamentos criados. */

module.exports = {
  async index(req, res) {
    const contracts = await Contract.findAll();
    res.json(contracts);
  },

  async show(req, res) {
    const { id } = req.params;
    const contract = await Contract.findByPk(id);
    res.json(contract);
  },
  async store(req, res) {
    const {
      trainee_id,
      category_id,
      company_id,
      start_validity,
      end_validity,
      remuneration,
      extra,
      created_at,
      updated_at,
    } = req.body;
    const contract = await Contract.create({
      trainee_id,
      category_id,
      company_id,
      start_validity,
      end_validity,
      status : true,
      remuneration,
      extra,
      created_at,
      updated_at,
    });
    res.json(contract);
  },
  async update(req, res) {
    const { id } = req.params;
    const {
      trainee_id,
      category_id,
      company_id,
      start_validity,
      end_validity,
      status,
      remuneration,
      extra,
      created_at,
      updated_at,
    } = req.body;
    const contract = await Contract.update(
      {
        trainee_id,
        category_id,
        company_id,
        start_validity,
        end_validity,
        status,
        remuneration,
        extra,
        created_at,
        updated_at,
      },
      {
        where: {
          id,
        },
      }
    );
    res.json(contract);
  },
};
