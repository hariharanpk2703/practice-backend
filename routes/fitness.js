const express = require('express')
const FitnessController = require('../components/fitnessc');

const FitnessRouter = express.Router()
FitnessRouter.route("/Fitness")
.get(FitnessController.apiController)
module.exports = FitnessRouter