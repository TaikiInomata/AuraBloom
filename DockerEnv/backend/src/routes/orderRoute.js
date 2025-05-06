import express from 'express'
import { orderController } from '~/controllers/orderController'

const Router = express.Router()

Router.route('/')
  .post(orderController.createOrder)

export const orderRoute = Router