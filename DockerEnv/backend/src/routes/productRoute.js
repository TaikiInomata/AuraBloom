import express from 'express'
import { productController } from '../controllers/productController.js'
// import { productValidation } from '~/validations/productValidation'

const Router = express.Router()

// Router.route('/')
//   .get(productController.getProducts)
//   .post(productValidation.createProduct)

Router.route('/')
  .get(productController.getProducts)


export const productRoute = Router