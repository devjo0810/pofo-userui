import Vue from 'vue'
import VueRouter from 'vue-router'
import adminRoutes from './admin'
import portfolioRoutes from './portfolio'
import profileRoutes from './profile'
import searchRoutes from './search'
import signRoutes from './sign'
import templateRoutes from './template'
import NotFound from '../views/NotFound'
import store from '@/store'

/**
 * Vue Router 예외제거
 * NavigationDuplicated
 */
const superPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location) {
  return superPush.call(this, location).catch(err => {
    if (err.name !== 'NavigationDuplicated') throw err
  })
}

Vue.use(VueRouter)

const routes = [
  ...adminRoutes,
  ...portfolioRoutes,
  ...profileRoutes,
  ...searchRoutes,
  ...signRoutes,
  ...templateRoutes,
  { path: '*', name: 'NotFound', component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  // 화면 인증정보 확인
  if (to.meta.auth) {
    const isLogin = await store.dispatch('Login/isLogin')
    if (!isLogin) {
      // await Vue.dialog.alert('로그인후 이용 가능합니다.')
      console.log('로그인 후 접근 가능!')
      return next('/')
    }
  }

  // // 화면 appName으로 메뉴 목록 갱신
  // if (to.meta.appName) {
  //   await store.dispatch('Menu/changeMenuByApp', { appName: to.meta.appName })
  // }
  // store.dispatch('Menu/changeMenu', { path: to.path })
  window.log('router to :', to)
  return next()
})

export default router
