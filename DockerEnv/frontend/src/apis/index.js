import authorizedAxiosInstance from '~/utils/authorizedAxios'
import { API_ROOT } from '~/utils/constants'

export const fetchLandingPageAPI = async () => {
  const response = await authorizedAxiosInstance.get(`${API_ROOT}/v1/landing-page`)
  return response.data
}

/**
 * Auth APIs
 */
export const loginUserAPI = async (data) => {
  const response = await authorizedAxiosInstance.post(`${API_ROOT}/v1/auth/login`, data)
  return response.data
}

export const registerUserAPI = async (data) => {
  const response = await authorizedAxiosInstance.post(`${API_ROOT}/v1/auth/register`, data)
  return response.data
}

export const refreshTokenAPI = async () => {
  const response = await authorizedAxiosInstance.get(`${API_ROOT}/v1/auth/refresh-token`)
  return response.data
}

export const logoutUserAPI = async () => {
  return await authorizedAxiosInstance.delete(`${API_ROOT}/v1/auth/logout`)
}