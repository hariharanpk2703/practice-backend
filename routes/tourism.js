const express = require ('express')
const TourismController = require('../components/tourismc');

const TourismRouter = express.Router()
TourismRouter.route("/Tourism")
.get(TourismController.apiController)
module.exports = TourismRouter