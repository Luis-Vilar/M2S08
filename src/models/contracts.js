const connection = require("../database/connection");
const { STRING, DATE, INTEGER } = require("sequelize");
const Contract = connection.define(
  "Contracts",
  {
    trainee_id: INTEGER,
    category_id: INTEGER,
    company_id: INTEGER,
    start_validity: DATE,
    end_validity: DATE,
    status: STRING,
    remuneration: INTEGER,
    extra: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  },
  {
    underscored: true,
    timestamps: false,
  }
);

module.exports = Contract;
