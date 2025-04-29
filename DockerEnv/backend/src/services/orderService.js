import { orderModel } from '~/models/orderModel'

const createOrder = async (data) => {
  try {
    const res = await orderModel.createOrder(data)
    return {
      success: true,
      message: 'Order created successfully!',
      data: res
    }
  } catch (error) {
    throw {
      success: false,
      message: 'Error creating product',
      error: error
    }
  }
}

export const orderService = {
  createOrder
}