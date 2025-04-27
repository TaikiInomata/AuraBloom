import { StatusCodes } from 'http-status-codes'
import ms from 'ms'
import { authService } from '~/services/authService'
import ApiError from '~/utils/ApiError'

const register = async (req, res, next) => {
  try {
    const createdAccount = await authService.register(req.body)

    res.status(StatusCodes.OK).json(createdAccount)
  } catch (error) {
    next(error)
  }
}

const login = async (req, res, next) => {
  try {

    const res = await authService.login(req.body)

    res.cookie('accessToken', res.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: ms('14 days')
    })

    res.cookie('refreshToken', res.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: ms('14 days')
    })

    delete res['accessToken']
    delete res['refreshToken']

    res.status(StatusCodes.OK).json(res)
  } catch (error) {
    next(error)
  }
}

const refreshToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies

    if (!refreshToken) throw new ApiError(StatusCodes.UNAUTHORIZED, 'Refresh token không tồn tại!')

    const newAccessToken = await authService.refreshToken(refreshToken)

    res.cookie('accessToken', newAccessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: ms('14 days')
    })

    res.status(StatusCodes.OK).json({ accessToken: newAccessToken })
  } catch (error) {
    next(error)
  }
}

const logout = async (req, res, next) => {
  try {
    res.clearCookie('accessToken', {
      httpOnly: true,
      secure: true,
      sameSite: 'none'
    })
    res.clearCookie('refreshToken', {
      httpOnly: true,
      secure: true,
      sameSite: 'none'
    })

    res.status(StatusCodes.OK).json({ message: 'Logout successfully!' })
  } catch (error) {
    next(error)
  }
}

export const authController = {
  register,
  login,
  refreshToken,
  logout
}