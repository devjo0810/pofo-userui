import Vue from 'vue'
import './plugins/main'
import router from './router'
import store from './store'
import App from './App.vue'
import './assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
