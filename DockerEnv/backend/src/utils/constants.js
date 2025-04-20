import { env } from '../config/environment.js'

export const WHITELIST_DOMAINS = [
  'http://localhost:8080'
]

export const WEBSITE_DOMAIN = (env.BUILD_MODE === 'dev') ? env.WEBSITE_DOMAIN_DEVELOPMENT : env.WEBSITE_DOMAIN_PRODUCTION

export const INVALID_PRODUCT_FILTER_FIELD = ['description', 'totalStock', 'sold']

export const USER_ROLE = ['seller', 'buyer']

export const AVARTAR_DEFAULT = 'https://static.vecteezy.com/system/resources/previews/009/734/564/original/default-avatar-profile-icon-of-social-media-user-vector.jpg'

export const DEFAULT_ITEMS_PER_PAGE = 40