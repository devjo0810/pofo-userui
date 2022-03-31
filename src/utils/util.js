/**
 * 고유값 생성 함수
 * @param {Number} len default = 10
 * @returns {String}
 */
export const createId = (len = 10) => {
  var text = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < len; i++) { text += possible.charAt(Math.floor(Math.random() * possible.length)) }

  return text
}

/**
 * 브라우저 버전 체크
 * @returns {String} browser version ["chrome", "ie"]
 */
export const checkBrowser = () => {
  const agent = navigator.userAgent.toLowerCase()
  let result = 'chrome'
  if (
    (navigator.appName === 'Netscape' &&
      navigator.userAgent.search('Trident') !== -1) ||
    agent.indexOf('msie') !== -1
  ) {
    result = 'ie'
  }

  return result
}

/**
 * 파일 Base64 인코딩
 * @param {File} file
 * @returns {String} base64 encoding text
 */
export const getBase64 = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      let encoded = reader.result.toString().replace(/^data:(.*,)?/, '')
      if (encoded.length % 4 > 0) {
        encoded += '='.repeat(4 - (encoded.length % 4))
      }
      resolve(encoded)
    }
    reader.onerror = error => reject(error)
  })
}

/**
 * dataURL을 File 객체로 변환
 * @param {String} url
 * @param {String} filename
 * @returns {File}
 */
export const dataURLtoFile = (url, filename) => {
  try {
    const arr = url.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }

    return new File([u8arr], filename, { type: mime })
  } catch (e) {
    console.log('dataURL to file Exception : ', e, 1)
    return null
  }
}

/**
 * dataURL을 Blob 객체로 변환
 * @param {String} url
 * @returns {Blob}
 */
export const dataURLtoBlob = url => {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  const byteString = atob(url.split(',')[1])

  // separate out the mime component
  const mimeString = url.split(',')[0].split(':')[1].split(';')[0]

  // write the bytes of the string to an ArrayBuffer
  const ab = new ArrayBuffer(byteString.length)

  // create a view into the buffer
  const ia = new Uint8Array(ab)

  // set the bytes of the buffer to the correct values
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }

  // write the ArrayBuffer to a blob, and you're done
  const blob = new Blob([ab], { type: mimeString })
  return blob
}

/**
 * Blob 객체를 dataURL로 변환
 * @param {Blob} blob
 * @returns {Promise}
 */
export const blobToDataURL = blob =>
  new Promise(resolve => {
    const reader = new FileReader()
    reader.onload = e => {
      return resolve(e.target.result)
    }
    reader.readAsDataURL(blob)
  })

/**
 * 이미지를 dataURL로 변경
 * @param {File} img
 * @returns {String} dataURL
 */
export const imageToDataURL = img => {
  // Create canvas
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  // Set width and height
  canvas.width = img.width
  canvas.height = img.height
  // Draw the image
  ctx.drawImage(img, 0, 0)
  return canvas.toDataURL('image/jpeg')
}

/**
 * dataURL을 로컬 디바이스에 저장
 * @param {String} path
 * @param {String} fileName
 */
export const downloadFileToURL = (path, fileName) => {
  const link = document.createElement('a')
  link.href = path
  link.download = fileName
  link.click()
  link.remove()
}

/**
 * Blob을 로컬 디바이스에 저장
 * @param {Blob} blob
 * @param {String} fileName
 */
export const downloadFileToBlob = (blob, fileName) => {
  const url = window.URL.createObjectURL(blob)
  downloadFileToURL(url, fileName)
  window.URL.revokeObjectURL(url)
}

/**
 * 이미지 Element를 캔버스 Element를 이용하여 저장하는 함수
 * android chrome에서 blob을 이용한 디바이스 저장이 안되서 생성
 * @param {Element} imgElem
 * @param {String} fileName
 */
export const downloadFileForCanvas = (imgElem, fileName) => {
  const downloadCanvas = document.createElement('canvas')
  // canvas에 image 복사
  downloadCanvas.width = imgElem.width
  downloadCanvas.height = imgElem.height
  const context = downloadCanvas.getContext('2d')
  context.drawImage(imgElem, 0, 0, imgElem.width, imgElem.height)
  downloadFileToURL(downloadCanvas.toDataURL(), fileName)
  downloadCanvas.remove()
}

/**
 * 입력시 숫자만 입력
 * @param {Event} event
 * @param {String} message
 */
export const isNumber = (event, message) => {
  if (!/\d/.test(event.key) && (event.key !== '.' || /\./.test(message))) { return event.preventDefault() }
}

/**
 * 브라우저 전체화면으로 전환 (IOS 미지원)
 */
export const openFullScreen = () => {
  const doc = document.documentElement
  if (doc.requestFullscreen) doc.requestFullscreen()
  else if (doc.webkitRequestFullscreen) doc.webkitRequestFullscreen()
  else if (doc.mozRequestFullScreen) doc.mozRequestFullScreen()
  else if (doc.msRequestFullscreen) doc.msRequestFullscreen()
}

/**
 * 브라우저 전체화면 해제 (IOS 미지원)
 */
export const closeFullScreen = () => {
  const doc = document
  if (doc.exitFullscreen) doc.exitFullscreen()
  else if (doc.webkitExitFullscreen) doc.webkitExitFullscreen()
  else if (doc.mozCancelFullScreen) doc.mozCancelFullScreen()
  else if (doc.msExitFullscreen) doc.msExitFullscreen()
}

/**
 * 브라우저 페이지 리로드
 */
export const pageReload = () => {
  location.reload()
}

/**
 * x축 좌표 반환
 * @param {Event} e
 * @param {String} type ["start", "end"]
 * @returns {Number}
 */
export const getClientX = (e, type) => {
  let clientX
  if (!type || type === 'start') {
    clientX =
      typeof e.clientX !== 'undefined' ? e.clientX : e.touches[0].clientX
  } else if (type && type === 'end') {
    clientX =
      typeof e.clientX !== 'undefined'
        ? e.clientX
        : e.changedTouches[0].clientX
  }
  return clientX
}

/**
 * y축 좌표 반환
 * @param {Event} e
 * @param {String} type ["start", "end"]
 * @returns {Number}
 */
export const getClientY = (e, type) => {
  let clientY
  if (!type || type === 'start') {
    clientY =
      typeof e.clientY !== 'undefined' ? e.clientY : e.touches[0].clientY
  } else if (type && type === 'end') {
    clientY =
      typeof e.clientY !== 'undefined'
        ? e.clientY
        : e.changedTouches[0].clientY
  }
  return clientY
}

/**
 * 브라우저의 hidden, visibilitychange 이벤트 명 반환
 * @returns {Object} hidden, visibilitychange
 */
export const getBrowserHidden = () => {
  let hidden
  let visibilityChange
  if (typeof document.hidden !== 'undefined') {
    hidden = 'hidden'
    visibilityChange = 'visibilitychange'
  } else if (typeof document.msHidden !== 'undefined') {
    hidden = 'msHidden'
    visibilityChange = 'msvisibilitychange'
  } else if (typeof document.webkitHidden !== 'undefined') {
    hidden = 'webkitHidden'
    visibilityChange = 'webkitvisibilitychange'
  }

  return { hidden, visibilityChange }
}
