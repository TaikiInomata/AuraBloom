/* eslint-disable no-useless-catch */
import Joi from 'joi'

const CATEGORY_COLLECTION_NAME = 'categories'
const CATEGORY_COLLECTION_SCHEMA = Joi.object({
  name: Joi.string().required().trim().strict(),
  description: Joi.string(),
  avatar: Joi.string(),
  slug: Joi.string().required(),
  createdAt: Joi.date().timestamp('javascript').default(Date.now),
  updatedAt: Joi.date().timestamp('javascript').default(null),
  _deleted: Joi.boolean().default(false)
})


export const categoryModel = {
  CATEGORY_COLLECTION_NAME,
  CATEGORY_COLLECTION_SCHEMA
}
