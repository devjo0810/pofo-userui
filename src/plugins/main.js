import { debug } from '@/config'
import Vue from 'vue'
/* bootstrap-vue */
import './bootstrap'
/* toastui-grid  */
import './tui-grid'
/* axios */
import api from './api'
/* global-component */
import globalDialog from './global-dialog'
import globalSpinner from './global-spinner'
/* vue-awesome-swiper */
import 'swiper/css/swiper.css'
/* vue-draggable-resizable */
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
/* font-awesome-icon */
import './font-awesome-icon'

window.log = function (...args) {
  if (!debug) return
  console.log(...args)
}

Vue.use(api)
Vue.use(globalDialog)
Vue.use(globalSpinner)
