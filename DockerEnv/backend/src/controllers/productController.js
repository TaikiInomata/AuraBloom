import { StatusCodes } from 'http-status-codes'
import { productService } from '~/services/productService'

const getProducts = async (req, res, next) => {
  try {
    const { page, itemsPerPage, queryFilter } = req.query
    const productList = await productService.getProducts(page, itemsPerPage, queryFilter)

    res.status(StatusCodes.OK).json(productList)
  } catch (error) {
    next(error)
  }
}

const getDetail = async (req, res, next) => {
  try {
    const productId = req.params.id
    const productDetail = await productService.getDetail(productId)

    res.status(StatusCodes.OK).json(productDetail)
  } catch (error) {
    next(error)
  }
}

export const productController = {
  getProducts,
  getDetail
}