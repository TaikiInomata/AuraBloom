import express from 'express'
import { landingPageRoute } from './landingPageRoute.js'


const Router = express.Router()

/* Buyer APIs */

Router.use('/landing-page', landingPageRoute)

/* Seller APIs */

/* Admin APIs */


export const APIs_V1 = Router