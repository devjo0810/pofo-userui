const MainView = () => import('@/views/MainView')
const Sample = () => import('@/views/search/Sample')

export default [
  {
    path: '/',
    name: 'MainView',
    component: MainView,
    meta: { auth: false, layout: 'Main' }
  },
  {
    path: '/search',
    name: 'Sample',
    component: Sample,
    meta: { auth: false, layout: 'Main' }
  }
]
