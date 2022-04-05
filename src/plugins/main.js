import { debug } from '@/config'
import Vue from 'vue'
import './bootstrap'
import './tui-grid'
import api from './api'
import globalDialog from './global-dialog'
import globalSpinner from './global-spinner'

window.log = function (...args) {
  if (!debug) return
  console.log(...args)
}

Vue.use(api)
Vue.use(globalDialog)
Vue.use(globalSpinner)
