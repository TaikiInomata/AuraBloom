import express from 'express'
import { landingPageRoute } from './landingPageRoute.js'
import { productRoute } from './productRoute.js'


const Router = express.Router()

/* Buyer APIs */

Router.use('/landing-page', landingPageRoute)
Router.use('/products', productRoute)

/* Seller APIs */

/* Admin APIs */


export const APIs_V1 = Router