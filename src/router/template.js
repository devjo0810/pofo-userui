const TemplateMain = () => import(/* webpackChunkName: "template" */ '@/views/template/TemplateMain')

export default [
  {
    path: '/template',
    redirect: '/template/main'
  },
  {
    path: '/template/main',
    name: 'TemplateMain',
    component: TemplateMain,
    meta: { auth: false }
  }
]
