import Joi from 'joi'
import { ObjectId } from 'mongodb'
import { GET_DB } from '~/config/mongodb'
import { AVARTAR_DEFAULT, USER_ROLE } from '~/utils/constants'
import { EMAIL_RULE, EMAIL_RULE_MESSAGE, PASSWORD_RULE, PASSWORD_RULE_MESSAGE, PHONE_RULE, PHONE_RULE_MESSAGE } from '~/utils/validators'


const USER_COLLECTION_NAME = 'users'
const USER_COLLECTION_SCHEMA = Joi.object({
  name: Joi.string().required().trim().strict(),
  username: Joi.string().required().trim().strict(),
  email: Joi.string().required().pattern(EMAIL_RULE).message(EMAIL_RULE_MESSAGE),
  password: Joi.string().required().pattern(PASSWORD_RULE).message(PASSWORD_RULE_MESSAGE),
  phone: Joi.string().required().pattern(PHONE_RULE).message(PHONE_RULE_MESSAGE),
  address: Joi.string().required().trim().strict(),
  role: Joi.string().valid(...USER_ROLE).required(),
  avatar: Joi.string().default(AVARTAR_DEFAULT),
  _deleted: Joi.boolean().default(false),
  createdAt: Joi.date().timestamp('javascript').default(Date.now),
  updatedAt: Joi.date().timestamp('javascript').default(null)
})
const findOneById = async (userId) => {
  try {
    const user = await GET_DB().collection(USER_COLLECTION_NAME).findOne({
      _id: new ObjectId(userId),
      _deleted: false
    })
    return user || null
  } catch (error) {
    throw new Error(error)
  }
}
const findOneByEmail = async (email) => {
  try {
    const user = await GET_DB().collection(USER_COLLECTION_NAME).findOne(
      {
        email: email,
        _deleted: false
      })
    return user || null
  } catch (error) {
    throw new Error(error)
  }
}

const createAccount = async (data) => {
  try {
    const validatedData = await USER_COLLECTION_SCHEMA.validateAsync(data, { abortEarly: false })
    const result = await GET_DB().collection(USER_COLLECTION_NAME).insertOne(validatedData)
    const createdAccount = await findOneById(result.insertedId)
    return createdAccount
  } catch (error) {
    throw new Error(error)
  }
}

export const userModel = {
  USER_COLLECTION_NAME,
  USER_COLLECTION_SCHEMA,
  findOneByEmail,
  createAccount
}