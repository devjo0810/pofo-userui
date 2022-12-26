const Login = () => import('@/views/sign/Login')

export default [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { auth: false }
  }
]
