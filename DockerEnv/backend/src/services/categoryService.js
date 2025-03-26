/* eslint-disable no-useless-catch */
import { categoryModel } from '~/models/categoryModel'

const getCategories = async () => {
  try {
    const categoryList = await categoryModel.getAll()

    return categoryList
  } catch (error) {
    throw error
  }
}

export const categoryService = {
  getCategories
}