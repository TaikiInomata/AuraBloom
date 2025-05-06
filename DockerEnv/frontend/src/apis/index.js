import authorizedAxiosInstance from '~/utils/authorizedAxios'
import { API_ROOT } from '~/utils/constants'

export const fetchLandingPageAPI = async () => {
  const response = await authorizedAxiosInstance.get(
    `${API_ROOT}/v1/landing-page`
  )
  return response.data
}
export const fetchProductListAPI = async () => {
  const response = await authorizedAxiosInstance.get(`${API_ROOT}/v1/products`)
  return response.data
}
export const fetchProductDetailAPI = async (id) => {
  const response = await authorizedAxiosInstance.get(
    `${API_ROOT}/v1/products/${id}`
  )
  return response.data
}
/**
 * Auth APIs
 */
export const loginUserAPI = async (data) => {
  const response = await authorizedAxiosInstance.post(
    `${API_ROOT}/v1/auth/login`,
    data
  )
  return response.data
}

export const registerUserAPI = async (data) => {
  const response = await authorizedAxiosInstance.post(
    `${API_ROOT}/v1/auth/register`,
    data
  )
  return response.data
}

export const refreshTokenAPI = async () => {
  const response = await authorizedAxiosInstance.get(
    `${API_ROOT}/v1/auth/refresh-token`
  )
  return response.data
}

export const logoutUserAPI = async () => {
  return await authorizedAxiosInstance.delete(`${API_ROOT}/v1/auth/logout`)
}

export const createProductAPI = async (data) => {
  return await authorizedAxiosInstance.post(`${API_ROOT}/v1/products/`, data)
}

export const createOrderAPI = async (data) => {
  return await authorizedAxiosInstance.post(`${API_ROOT}/v1/order/`, data)
}

export const fetchCartProductList = async (idList) => {
  return await authorizedAxiosInstance.post(
    `${API_ROOT}/v1/products/list`,
    idList
  )
}

/**
 * Cart APIs
 * @author levi
 */

export const fetchCurrentCartAPI = async () => {
  const response = await authorizedAxiosInstance.get(`${API_ROOT}/v1/cart`)
  return response.data
}

export const addToCartAPI = async (data) => {
  const response = await authorizedAxiosInstance.post(
    `${API_ROOT}/v1/cart/add`,
    data
  )
  return response.data
}

export const updateCartQuantityAPI = async (data) => {
  const response = await authorizedAxiosInstance.put(
    `${API_ROOT}/v1/cart/update`,
    data
  )
  return response.data
}

export const deleteItemAPI = async (data) => {
  const response = await authorizedAxiosInstance.put(
    `${API_ROOT}/v1/cart/delete`,
    data
  )
  return response.data
}
