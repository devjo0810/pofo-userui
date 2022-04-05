import GlobalDialog from '../components/global/GlobalDialog'

export default {
  install (Vue) {
    const ModalConstructor = Vue.extend(GlobalDialog)
    const modalInstance = new ModalConstructor({
      el: document.createElement('div')
    })
    const dialog = {
      alert (message, title) {
        return new Promise((resolve, reject) => {
          document.body.appendChild(modalInstance.$el)
          modalInstance.isShow = true
          modalInstance.type = 'alert'
          modalInstance.title = title || '안내'
          modalInstance.message = message
          modalInstance.promiseResolve = resolve
          modalInstance.promiseReject = reject
        })
      },
      confirm (message, title) {
        return new Promise((resolve, reject) => {
          document.body.appendChild(modalInstance.$el)
          modalInstance.isShow = true
          modalInstance.type = 'confirm'
          modalInstance.title = title || '안내'
          modalInstance.message = message
          modalInstance.promiseResolve = resolve
          modalInstance.promiseReject = reject
        })
      }
    }

    Vue.dialog = dialog
    Vue.prototype.$dialog = dialog
  }
}
