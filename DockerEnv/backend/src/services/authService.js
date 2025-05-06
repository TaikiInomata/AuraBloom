
import bcryptjs from 'bcryptjs'
import { StatusCodes } from 'http-status-codes'
import { env } from '~/config/environment'
import { userModel } from '~/models/userModel'
import { JwtProvider } from '~/providers/JwtProvider'
import ApiError from '~/utils/ApiError'

const login = async (reqBody) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const email = reqBody.email
    const password = reqBody.password

    const existUser = await userModel.findOneByEmail(email)
    if (!existUser) throw new ApiError(StatusCodes.NOT_FOUND, 'Tài khoản không tồn tại!')

    const isMatchPassword = bcryptjs.compareSync(password, existUser.password)
    if (!isMatchPassword) throw new ApiError(StatusCodes.NOT_ACCEPTABLE, 'Mật khẩu không chính xác!')

    const userInfo = {
      _id: existUser._id,
      email: existUser.email
    }

    const accessToken = await JwtProvider.generateToken(
      userInfo,
      env.ACCESS_TOKEN_SECRET_SIGNATURE,
      env.ACCESS_TOKEN_LIFE
      // 5
    )

    const refreshToken = await JwtProvider.generateToken(
      userInfo,
      env.REFRESH_TOKEN_SECRET_SIGNATURE,
      env.REFRESH_TOKEN_LIFE
    )

    return { existUser, accessToken, refreshToken }
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

const refreshToken = async (clientRefreshToken) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const refreshTokenDecoded = await JwtProvider.verify(clientRefreshToken, env.REFRESH_TOKEN_SECRET_SIGNATURE)
    if (!refreshTokenDecoded) throw new ApiError(StatusCodes.UNAUTHORIZED, 'Refresh token không hợp lệ!')


    const userInfo = {
      _id: refreshTokenDecoded._id,
      email: refreshTokenDecoded.email
    }

    const accessToken = await JwtProvider.generateToken(
      userInfo,
      env.ACCESS_TOKEN_SECRET_SIGNATURE,
      env.ACCESS_TOKEN_LIFE
    )

    return { accessToken }
  }
  catch (error) {
    throw error
  }
}

export const authService = {
  register,
  login,
  refreshToken
}