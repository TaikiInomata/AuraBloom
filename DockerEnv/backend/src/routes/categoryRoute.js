import express from 'express'
import { categoryController } from '~/controllers/categoryController'

const Router = express.Router()

Router.route('/')
  .get(categoryController.getCategories)

export const categoryRoute = Router