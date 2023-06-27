const contractRoutes = require("express").Router();
const { index, show, store, update } = require("../../controllers/contract.js");

contractRoutes.get("/contracts", index);
contractRoutes.get("/contracts/:id", show);
contractRoutes.post("/contracts", store);
contractRoutes.patch("/contracts/:id", update);

module.exports = contractRoutes;

