import GlobalSpinner from '@/components/global/GlobalSpinner'

export default {
  install (Vue) {
    const SpinnerConstructor = Vue.extend(GlobalSpinner)
    const spinnerInstance = new SpinnerConstructor({
      el: document.createElement('div')
    })

    const spinner = {
      show () {
        document.body.appendChild(spinnerInstance.$el)
        spinnerInstance.isShow = true
      },
      hide () {
        spinnerInstance.isShow = false
      }
    }

    Vue.spinner = spinner
    Vue.prototype.$spinner = spinner
  }
}
