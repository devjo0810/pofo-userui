export default [
  {
    path: '/template',
    redirect: '/template/main'
  },
  {
    path: '/template/main',
    name: 'TemplateMain',
    component: () => import(/* webpackChunkName: "template" */ '@/views/template/TemplateMain'),
    meta: { auth: false }
  },
  {
    path: '/template/widget',
    name: 'TemplateWidget',
    component: () => import(/* webpackChunkName: "template" */ '@/views/template/TemplateWidget'),
    meta: { auth: false }
  }
]
