import { StatusCodes } from 'http-status-codes'
import { landingPageService } from '~/services/landingPageService'


const getDetail = async (req, res, next) => {
  try {
    const landingPage = await landingPageService.getDetail()


    res.status(StatusCodes.OK).json({
      message: 'GET LANDING PAGE DETAIL SUCCESS',
      landingPage: landingPage
    })
  } catch (error) {
    next(error)
  }


}

export const landingPageController = {
  getDetail
}