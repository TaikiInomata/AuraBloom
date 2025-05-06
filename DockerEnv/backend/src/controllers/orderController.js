import { StatusCodes } from 'http-status-codes'
import { orderService } from '~/services/orderService'

const createOrder = async (req, res, next) => {
  try {
    const createOrder = await orderService.createOrder(req.body)

    res.status(StatusCodes.CREATED).json(createOrder)
  } catch (error) {
    next(error)
  }
}

export const orderController = {
  createOrder
}