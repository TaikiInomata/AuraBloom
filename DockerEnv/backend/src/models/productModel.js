
import Joi from 'joi'
import { ObjectId } from 'mongodb'
import unidecode from 'unidecode'
import { GET_DB } from '~/config/mongodb'
import { pagingSkipValue } from '~/utils/algorithms'
import { INVALID_PRODUCT_FILTER_FIELD } from '~/utils/constants'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'

const PRODUCT_COLLECTION_NAME = 'products'
const PRODUCT_COLLECTION_SCHEMA = Joi.object({
  name: Joi.string().required().trim().strict(),
  categoryId: Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE).default(null),
  description: Joi.string(),
  avgPrice: Joi.number().default(0),
  totalStock: Joi.number().default(0),
  medias: Joi.array().items(Joi.string()),
  avatar: Joi.string(),
  brand: Joi.string(),
  rating: Joi.number().default(0),
  sold: Joi.number().default(0),
  slug: Joi.string().required(),
  types: Joi.array().items({
    typeId: Joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),
    properties: Joi.array().items({
      key: Joi.string().trim().strict(),
      value: Joi.string().trim().strict()
    }),
    avatar: Joi.string(),
    stock: Joi.number().default(0),
    price: Joi.number().default(0),
    discount: Joi.number().default(0),
    createdAt: Joi.date().timestamp('javascript').default(Date.now),
    updatedAt: Joi.date().timestamp('javascript').default(null),
    _deleted: Joi.boolean().default(false)
  }),
  createdAt: Joi.date().timestamp('javascript').default(Date.now),
  updatedAt: Joi.date().timestamp('javascript').default(null),
  _deleted: Joi.boolean().default(false)
})


const getProducts = async (page, itemsPerPage, queryFilters) => {
  try {
    const queryConditions = [{ _deleted: false }]

    if (queryFilters) {
      Object.keys(queryFilters).forEach(key => {
        if (INVALID_PRODUCT_FILTER_FIELD.includes(key)) {
          delete queryFilters[key]
        }
      })
      Object.keys(queryFilters).forEach(key => {
        if (key === 'name') {
          const slug = unidecode(queryFilters[key]).trim().replace(/\s+/g, '-')
          const regexSlug = new RegExp(slug, 'i')

          queryConditions.push({
            $or: [
              { [key]: { $regex: new RegExp(queryFilters[key], 'i') } },
              { slug: { $regex: regexSlug } }
            ]
          })
        }
      })
    }
    const query = await GET_DB().collection(PRODUCT_COLLECTION_NAME).aggregate(
      [
        { $match: { $and: queryConditions } },
        // { $sort: { name: 1 } },
        {
          $facet: {
            'queryProducts': [
              { $skip: pagingSkipValue(page, itemsPerPage) },
              { $limit: itemsPerPage }
            ],
            'queryTotalProducts': [{ $count: 'totalProductsCount' }]
          }
        }
      ],
      { collation: { locale: 'en' } }
    ).toArray()

    const res = query[0]

    return {
      products: res.queryProducts || [],
      totalProducts: res.queryTotalProducts[0]?.totalProductsCount || 0
    }
  } catch (error) { throw new Error(error) }
}

const findOneById = async (id) => {
  try {
    const res = await GET_DB().collection(PRODUCT_COLLECTION_NAME).findOne(
      {
        $and: [
          { _id: new ObjectId(id) },
          { _deleted: false }]
      })
    return res
  } catch (error) {
    throw new Error(error)
  }
}

const createProduct = async (data) => {
  try {
    const validData = await PRODUCT_COLLECTION_SCHEMA.validateAsync(data, { abortEarly: false })

    const res = await GET_DB().collection(PRODUCT_COLLECTION_NAME).insertOne(validData)

    return await findOneById(res.insertedId)
  } catch (error) {
    throw new Error(error)
  }
}

const getProductList = async (ids) => {
  try {
    const objectIds = ids.map(id => new ObjectId(id))

    const products = await GET_DB().collection(PRODUCT_COLLECTION_NAME).find(
      {
        _id: { $in: objectIds },
        _deleted: false
      }
    ).toArray()

    return products
  } catch (error) {
    throw new Error(error)
  }
}

export const productModel = {
  PRODUCT_COLLECTION_NAME,
  PRODUCT_COLLECTION_SCHEMA,
  getProducts,
  findOneById,
  createProduct,
  getProductList
}
