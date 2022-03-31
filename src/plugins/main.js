import { debug } from '@/config'
import Vue from 'vue'
import './bootstrap'
import api from './api'

window.log = function (...args) {
  if (!debug) return
  console.log(...args)
}

Vue.use(api)
