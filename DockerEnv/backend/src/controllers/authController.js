import { StatusCodes } from 'http-status-codes'
import { authService } from '~/services/authService'

const register = async (req, res, next) => {
  try {
    const createdAccount = await authService.register(req.body)

    res.status(StatusCodes.OK).json(createdAccount)
  } catch (error) {
    next(error)
  }
}
export const authController = {
  register
}