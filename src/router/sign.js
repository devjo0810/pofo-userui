const Login = () => import('@/views/sign/Login')
const Sign = () => import('@/views/sign/Sign')

export default [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { auth: false }
  },
  {
    path: '/sign',
    name: 'Sign',
    component: Sign,
    meta: { auto: false }
  }
]
