const contractRoutes = require("express").Router();
const ContractController = require("../../controllers/contract.js");

contractRoutes.get("/contracts", ContractController.index);
contractRoutes.get("/contracts/:id", ContractController.show);

module.exports = contractRoutes;
