const express = require ('express')
const detailsController = require('../components/detailsc');

const detailsRouter = express.Router()
detailsRouter.route("/Headlines")
.get(detailsController.apiController)
module.exports = detailsRouter