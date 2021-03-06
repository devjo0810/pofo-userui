'use strict'
const debug = process.env.NODE_ENV !== 'production'

const APP = {
  version: process.env.VUE_APP_VERSION,
  title: process.env.VUE_APP_TITLE,
  titleAlias: process.env.VUE_APP_TITLE_ALIAS
}

const API_CONFIG = {
  baseUrl: process.env.VUE_APP_API_BASE_URL,
  timeout: 100000,
  debug: debug
}

const HTTP_STATUS = {
  ok: '200',
  notFound: '404'
}

export {
  debug,
  APP,
  API_CONFIG,
  HTTP_STATUS
}
