
import bcryptjs from 'bcryptjs'
import { StatusCodes } from 'http-status-codes'
import { userModel } from '~/models/userModel'
import ApiError from '~/utils/ApiError'

const register = async (reqBody) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const email = reqBody.email
    const existUser = await userModel.findOneByEmail(email)
    if (existUser) throw new ApiError(StatusCodes.CONFLICT, 'Email đã tồn tại!')

    const data = {
      ...reqBody,
      username: reqBody.email.split('@')[0].replace(/[^a-zA-Z]/g, ''),
      password: bcryptjs.hashSync(reqBody.password, 10)
    }
    const createdAccount = await userModel.createAccount(data)

    return createdAccount
  }
  catch (error) {
    throw error
  }
}

export const authService = {
  register
}