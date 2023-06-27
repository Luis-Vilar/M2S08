const connection = require("../database/connection");
const { STRING, DATE,  BOOLEAN} = require("sequelize");
const Trainee = connection.define(
  "Trainee",
  {
    name: STRING,
    email: STRING,
    rg: STRING,
    cpf: STRING,
    primary_phone_contact: STRING,
    secondary_phone_contact: STRING,
    date_birth: DATE,
    father_name: STRING,
    mother_name: STRING,
    have_special_needs: BOOLEAN,
    create_at: DATE,
    updated_at: DATE,
  },
  {
    underscored: true,
    timestamps: false,
  }
);
module.exports = Trainee;
