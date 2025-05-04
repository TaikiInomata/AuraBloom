import authorizedAxiosInstance from '~/utils/authorizedAxios'
import { API_ROOT } from '~/utils/constants'

export const fetchLandingPageAPI = async () => {
  const response = await authorizedAxiosInstance.get(`${API_ROOT}/v1/landing-page`)
  return response.data
}
export const fetchProductListAPI = async () => {
  const response = await authorizedAxiosInstance.get(`${API_ROOT}/v1/products`)
  return response.data
}
export const fetchProductDetailAPI = async (id) =>{
  const response = await authorizedAxiosInstance.get(`${API_ROOT}/v1/products/${id}`)
  return response.data
}