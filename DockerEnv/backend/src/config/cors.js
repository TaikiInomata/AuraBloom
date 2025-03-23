import { WHITELIST_DOMAINS } from '../utils/constants.js'
import { env } from './environment.js'
import { StatusCodes } from 'http-status-codes'
import ApiError from '../utils/ApiError.js'

export const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || env.BUILD_MODE === 'dev') {
      return callback(null, true)
    }

    if (WHITELIST_DOMAINS.includes(origin)) {
      return callback(null, true)
    }
    return callback(new ApiError(StatusCodes.FORBIDDEN, `${origin} not allowed by our CORS Policy.`))
  },

  // Some legacy browsers (IE11, various SmartTVs) choke on 204
  optionsSuccessStatus: 200,

  // CORS sẽ cho phép nhận cookies từ request
  credentials: true
}
