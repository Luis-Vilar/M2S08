const companyRoutes = require("express").Router();
const CompanyController = require("../../controllers/company.js");

companyRoutes.get("/companies", CompanyController.index);
companyRoutes.get("/companies/:id", CompanyController.show);
companyRoutes.post("/companies", CompanyController.store);
companyRoutes.put("/companies/:id", CompanyController.update);
companyRoutes.delete("/companies/:id", CompanyController.destroy);

module.exports = companyRoutes;
