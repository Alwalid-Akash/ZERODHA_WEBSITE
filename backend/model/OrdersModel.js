const mongoose = require("mongoose")

const { OrdersModel } = require('../schemas/OrdersSchema')

const HoldingsModel = new model(("order", OrdersSchema));

module.export = { OrdersModel }