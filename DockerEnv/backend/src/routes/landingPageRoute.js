import express from 'express'
import { landingPageController } from '~/controllers/landingPageController'


const Router = express.Router()


Router.route('/')
  .get(landingPageController.getDetail)


export const landingPageRoute = Router