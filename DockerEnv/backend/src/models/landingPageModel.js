/* eslint-disable no-useless-catch */
import Joi from 'joi'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'

const LANDING_PAGE_COLLECTION_NAME = 'landingPage'
const LANDING_PAGE_COLLECTION_SCHEMA = Joi.object({
  banner1: Joi.string(),
  banner2: Joi.string(),
  banner3: Joi.string(),
  banner4: Joi.string(),
  banner5: Joi.string(),
  banner6: Joi.string(),
  itemList: Joi.array().items({
    productId: Joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE)
  }),
  categoryList: Joi.array().items({
    categoryId: Joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE)
  }),
  contentList: Joi.object({
    title: Joi.string().trim().strict(),
    content: Joi.string()
  }),
  createdAt: Joi.date().timestamp('javascript').default(Date.now),
  updatedAt: Joi.date().timestamp('javascript').default(null)
})


export const landingPageModel = {
  LANDING_PAGE_COLLECTION_NAME,
  LANDING_PAGE_COLLECTION_SCHEMA
}
