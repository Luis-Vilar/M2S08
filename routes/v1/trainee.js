const traineeRoutes = require("express").Router();
const TraineeController = require("../../controllers/trainee.js");

traineeRoutes.get("/trainees", TraineeController.index);
traineeRoutes.get("/trainees/:id", TraineeController.show);
traineeRoutes.post("/trainees", TraineeController.store);
traineeRoutes.put("/trainees/:id", TraineeController.update);
traineeRoutes.delete("/trainees/:id", TraineeController.destroy);

module.exports = traineeRoutes;
