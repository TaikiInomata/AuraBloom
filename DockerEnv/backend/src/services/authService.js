
import bcryptjs from 'bcryptjs'
import { StatusCodes } from 'http-status-codes'
import { userModel } from '~/models/userModel'
import ApiError from '~/utils/ApiError'

const login = async (reqBody) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const email = reqBody.email
    const password = reqBody.password

    const existUser = await userModel.findOneByEmail(email)
    if (!existUser) throw new ApiError(StatusCodes.UNAUTHORIZED, 'Tài khoản không tồn tại!')

    const isMatchPassword = bcryptjs.compareSync(password, existUser.password)
    if (!isMatchPassword) throw new ApiError(StatusCodes.UNAUTHORIZED, 'Mật khẩu không chính xác!')

    return existUser
  }
  catch (error) {
    throw error
  }
}

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
  register,
  login
}