import express from 'express'
import { landingPageRoute } from './landingPageRoute.js'
import { productRoute } from './productRoute.js'
import { categoryRoute } from './categoryRoute.js'
import { authRoute } from './authRoute.js'


const Router = express.Router()

/* Buyer APIs */

Router.use('/landing-page', landingPageRoute)
Router.use('/products', productRoute)
Router.use('/categories', categoryRoute)
Router.use('/auth', authRoute)

/* Seller APIs */

/* Admin APIs */


export const APIs_V1 = Router