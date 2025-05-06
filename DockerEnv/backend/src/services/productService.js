/* eslint-disable no-useless-catch */
import { productModel } from '~/models/productModel'
import { DEFAULT_ITEMS_PER_PAGE } from '~/utils/constants'

const getProducts = async (page, itemsPerPage, queryFilter) => {
  try {
    if (!page) page = 1
    if (!itemsPerPage) itemsPerPage = DEFAULT_ITEMS_PER_PAGE
    // console.log(page)
    // console.log(itemsPerPage);
    const productList = await productModel.getProducts(page, itemsPerPage, queryFilter)

    return productList
  } catch (error) {
    throw error
  }
}

const getDetail = async (productId) => {
  try {
    const productDetail = await productModel.findOneById(productId)

    return productDetail
  } catch (error) {
    throw error
  }
}

const createProduct = async (data) => {
  try {
    const newProduct = await productModel.createProduct(data)
    return {
      success: true,
      message: 'Product created successfully!',
      product: newProduct
    }
  } catch (error) {
    throw {
      success: false,
      message: 'Error creating product',
      error: error
    }
  }
}

const getProductsByIds = async (productIds) => {
  try {
    const products = await productModel.getProductList(productIds)
    return products
  } catch (error) {
    throw error
  }
}

export const productService = {
  getProducts,
  getDetail,
  createProduct,
  getProductsByIds
}