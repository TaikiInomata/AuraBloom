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

const createProduct = async (req, res, next) => {
  try {
    const createdProduct = await productService.createProduct(req.body)

    res.status(StatusCodes.CREATED).json(createdProduct)
  } catch (error) {
    next(error)
  }
}

const getProductsByIds = async (req, res, next) => {
  try {
    const { ids } = req.body
    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid product IDs' })
    }

    const products = await productService.getProductsByIds(ids)

    res.status(StatusCodes.OK).json(products)
  } catch (error) {
    next(error)
  }
}

export const productController = {
  getProducts,
  getDetail,
  createProduct,
  getProductsByIds
}