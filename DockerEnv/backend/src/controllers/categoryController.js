import { StatusCodes } from 'http-status-codes'
import { categoryService } from '~/services/categoryService'

const getCategories = async (req, res, next) => {
  try {
    const categoryList = await categoryService.getCategories()

    res.status(StatusCodes.OK).json(categoryList)
  } catch (error) {
    next(error)
  }
}

export const categoryController = {
  getCategories
}