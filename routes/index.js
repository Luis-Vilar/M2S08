const { Router } = require("express");
const router = Router();

const traineeRoutes = require("./v1/trainee.js");
const companyRoutes = require("./v1/company.js");
const contractRoutes = require("./v1/contract.js");

router.use([traineeRoutes, companyRoutes, contractRoutes]);

module.exports =  router ;
