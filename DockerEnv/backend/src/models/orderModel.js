import Joi from 'joi'
import { GET_DB } from '~/config/mongodb'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'

const ORDER_COLLECTION_NAME = 'orders'

const ORDER_COLLECTION_SCHEMA = Joi.object({
  products: Joi.array()
    .items(
      Joi.object({
        productId: Joi.string()
          .required()
          .pattern(OBJECT_ID_RULE)
          .message(OBJECT_ID_RULE_MESSAGE),
        typeId: Joi.string()
          .required()
          .pattern(OBJECT_ID_RULE)
          .message(OBJECT_ID_RULE_MESSAGE),
        quantity: Joi.number().required()
      })
    )
    .required(),

  userId: Joi.string()
    .pattern(OBJECT_ID_RULE)
    .message(OBJECT_ID_RULE_MESSAGE)
    .allow(null, ''),

  identityNumber: Joi.string().allow(null, ''),

  address: Joi.string().required().trim().strict(),

  phone: Joi.string().required().trim().strict(),

  name: Joi.string().required().trim().strict(),

  paymentMethod: Joi.string().required().trim().strict(),

  totalPrice: Joi.number().required(),

  createdAt: Joi.date().timestamp('javascript').default(new Date().getTime()),

  updatedAt: Joi.date().timestamp('javascript').default(null),

  _deleted: Joi.boolean().default(false)
})

const createOrder = async (data) => {
  try {
    const validData = await ORDER_COLLECTION_SCHEMA.validateAsync(data, {
      abortEarly: false
    })

    const res = await GET_DB()
      .collection(ORDER_COLLECTION_NAME)
      .insertOne(validData)
    return res
  } catch (error) {
    throw new Error(error)
  }
}

export const orderModel = {
  ORDER_COLLECTION_NAME,
  ORDER_COLLECTION_SCHEMA,
  createOrder
}
