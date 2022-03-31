const Sample = () => import('@/views/search/Sample')

export default [
  {
    path: '/',
    name: 'Sample',
    component: Sample,
    meta: { auth: false, layout: 'Main' }
  }
]
