import express from 'express'
import { productController } from '~/controllers/productController'


const Router = express.Router()


Router.route('/')
  .get(productController.getProducts)


Router.route('/:id')
  .get(productController.getDetail)

export const productRoute = Router