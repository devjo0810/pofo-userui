import axios from 'axios'
// import vue from 'vue'
import { API_CONFIG } from '@/config'

export default {
  install (Vue) {
    const axiosOtions = {
      timout: API_CONFIG.timeout || 100000,
      crossDomain: true,
      withCredentials: false,
      debug: API_CONFIG.debug,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: -1
      }
    }
    window.log('init api options')
    window.log(axiosOtions)
    const api = axios.create(axiosOtions)

    api.interceptors.request.use(config => {
      window.log('api request config :', config)
      // vue.spinner.show()
      return config
    }, error => {
      window.log('api request error :', error)
      // vue.spinner.hide()
    })
    api.interceptors.response.use(response => {
      window.log('api response :', response)
      // vue.spinner.hide()
      return response
    }, error => {
      window.log('api response error :', error)
      // vue.spinner.hide()
    })

    Vue.api = api
    Vue.prototype.$api = api
  }
}
