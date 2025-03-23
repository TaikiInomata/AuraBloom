import { StatusCodes } from 'http-status-codes'


const createProduct = async (req, res, next) => {
}


const getProducts = async (req, res, next) => {
  res.status(StatusCodes.OK).json({
    message: 'success'
  })
}

export const productController = {
  createProduct,
  getProducts
}