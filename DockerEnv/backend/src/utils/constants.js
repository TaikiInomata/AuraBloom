import { env } from '../config/environment.js'

export const WHITELIST_DOMAINS = [
  'http://localhost:8080'
]

export const WEBSITE_DOMAIN = (env.BUILD_MODE === 'dev') ? env.WEBSITE_DOMAIN_DEVELOPMENT : env.WEBSITE_DOMAIN_PRODUCTION

export const INVALID_PRODUCT_FILTER_FIELD = ['description', 'totalStock', 'sold']

export const DEFAULT_ITEMS_PER_PAGE = 40