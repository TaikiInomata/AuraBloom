/* eslint-disable no-useless-catch */
import { StatusCodes } from 'http-status-codes'
import { landingPageModel } from '~/models/landingPageModel'
import ApiError from '~/utils/ApiError'

const getDetail = async () => {

  try {
    const landingPage = await landingPageModel.getDetail()
    if (!landingPage) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'LANDING NOT FOUND')
    }
    return landingPage
  } catch (error) {throw error}

}

export const landingPageService = {
  getDetail
}