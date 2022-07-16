const express = require ('express')
const TechnologyController = require('../components/technologyc');

const TechnologyRouter = express.Router()
TechnologyRouter.route("/Technology")
.get(TechnologyController.apiController)
module.exports = TechnologyRouter