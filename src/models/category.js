const  connection  = require('../database/connection');
const { STRING, DATE } = require('sequelize');
const Category = connection.define("categories", {
  name: STRING,
  created_at: DATE,
  updated_at: DATE,
},{
  underscored : true,
  timestamps : false,
});
module.exports = Category ;
