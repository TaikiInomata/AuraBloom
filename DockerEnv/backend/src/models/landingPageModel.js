/* eslint-disable no-useless-catch */
import Joi from 'joi'
import { GET_DB } from '~/config/mongodb'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'
import { productModel } from './productModel'
import { categoryModel } from './categoryModel'
import { pipeline } from 'nodemailer/lib/xoauth2'

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

const getDetail = async () => {
  try {
    const query = await GET_DB().collection(LANDING_PAGE_COLLECTION_NAME).aggregate([
      { $match: {} },
      {
        $lookup: {
          from: 'products',
          let: { productIds: '$itemList.productId' },
          pipeline: [
            { $match: { $expr: { $in: ['$_id', '$$productIds'] } } },
            { $project: { _id: 1, name: 1, avatar: 1, avgPrice: 1 } }
          ],
          as: 'products'
        }
      },
      {
        $lookup: {
          from: 'categories',
          let: { categoryIds: '$categoryList.categoryId' },
          pipeline: [
            { $match: { $expr: { $in: ['$_id', '$$categoryIds'] } } },
            { $project: { _id: 1, name: 1 } }
          ],
          as: 'categories'
        }
      }

    ]).toArray()

    return query[0] || null
  } catch (error) {
    throw new Error(error)
  }
}


export const landingPageModel = {
  LANDING_PAGE_COLLECTION_NAME,
  LANDING_PAGE_COLLECTION_SCHEMA,
  getDetail
}
