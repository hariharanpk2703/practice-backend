const express = require ('express')
const FoodController = require('../components/foodc');

const FoodRouter = express.Router()
FoodRouter.route("/Food")
.get(FoodController.apiController)
module.exports = FoodRouter