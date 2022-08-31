/**
 * Widget Define
 * id : 고유키
 * title : 위젯 타이틀
 * compoName : 매핑할 컴포넌트명
 * compoData : 매핑할 컴포넌트 props
 * x : x좌표
 * y : y좌표
 * w : width
 * h : height
 * bfX : 이전 x좌표
 * bfY : 이전 y좌표
 * bfW : 이전 width
 * bfH : 이전 height
 * zindex
 * isOnlyOne : 위젯 전체중 한개만 유지여부
 * isFullSize : 전체스크린 여부
 * isMinimize : 최소화 여부
 * isWindowPopup : 윈도우 팝업 여부
 */
const state = {
  widgetList: [],
  widgetPosition: {
    x: 10,
    y: 10
  }
}

const getters = {
  getWidgetList (state) {
    return state.widgetList
  }
}

const mutations = {
  initWidgetList (state) {
    state.widgetList = []
  },
  initWidgetPosition (state) {
    state.widgetPosition = {
      x: 10,
      y: 10
    }
  },
  setNextWidgetPosition (state) {
    const { x, y } = state.widgetPosition
    state.widgetPosition.x = x + 10
    state.widgetPosition.y = y + 10
  },
  addWidget (state, widget) {
    state.widgetList.push({
      id: createWidgetKey(),
      zindex: getNextZindex(state),
      x: state.widgetPosition.x,
      y: state.widgetPosition.y,
      isOnlyOne: false,
      isFullSize: false,
      isMinimize: false,
      isWindowPopup: false,
      ...widget
    })
  },
  setWidget (state, { id, ...props }) {
    const widget = state.widgetList.find(item => item.id === id)
    Object.keys(props).forEach(key => {
      widget[key] = props[key]
    })
    // for (const prop in props) {
    //   console.log('prop key :', prop, ', value :', props[prop])
    //   widget[prop] = props[prop]
    // }
  },
  delWidget (state, { id }) {
    const widgetIndex = state.widgetList.findIndex(item => item.id === id)
    state.widgetList.splice(widgetIndex, 1)
  },
  saveBfPositionAndSize (state, { id }) {
    const widget = state.widgetList.find(item => item.id === id)
    const { x, y, w, h } = widget
    widget.bfX = x
    widget.bfY = y
    widget.bfW = w
    widget.bfH = h
  }
}

const actions = {
  // 위젯 생성
  createWidget ({ commit }, widgetOption) {
    commit('addWidget', widgetOption)
    commit('setNextWidgetPosition')
  },
  // 위젯 zindex값 정렬
  // 알고리즘 재정의 필요...
  orderWidgetZindex ({ state, commit }, id) {
    const maxZindex = getMaxZindex(state)
    const maxZindexWidget = state.widgetList.find(item => item.zindex === maxZindex)
    if (id === maxZindexWidget.id) return
    commit('setWidget', { id, zindex: maxZindex })
    const decreWidgetList = state.widgetList.filter(item => item.id !== id)
    for (const widget of decreWidgetList) {
      commit('setWidget', { id: widget.id, zindex: widget.zindex - 1 })
    }
  },
  // 위젯 종료
  closeWidget ({ commit }, id) {
    commit('delWidget', { id })
  },
  // 위젯 전체화면
  fullSizingWidget ({ commit, dispatch }, { id, w, h }) {
    dispatch('orderWidgetZindex', id)
    commit('saveBfPositionAndSize', { id })
    commit('setWidget', { id, w, h, isFullSize: true, x: 1, y: 1 })
  },
  // 위젯 분할화면
  smallSizingWidget ({ state, commit, dispatch }, id) {
    dispatch('orderWidgetZindex', id)
    const { bfX, bfY, bfW, bfH } = loadBfPositionAndSize(state, id)
    // 위치는 이전으로 안돌아감..
    commit('setWidget', { id, isFullSize: false, x: bfX, y: bfY, w: bfW, h: bfH })
  },
  // 위젯 위치 업데이트
  updateWidgetPosition ({ commit, dispatch }, { id, x, y }) {
    dispatch('orderWidgetZindex', id)
    commit('setWidget', { id, x, y })
  },
  // 위젯 사이즈 및 위치 업데이트
  updateWidgetSize ({ commit, dispatch }, { id, x, y, w, h }) {
    dispatch('orderWidgetZindex', id)
    commit('setWidget', { id, x, y, w, h })
  },
  // 위젯 최소화
  minimizingWidget ({ commit }, id) {
    commit('setWidget', { id, isMinimize: true })
  },
  // 위젯 최소화 취소
  cancelMinimizingWidget ({ commit }, id) {
    commit('setWidget', { id, isMinimize: false })
  },
  // 위젯 초기화
  initWidget ({ commit }) {
    commit('initWidgetList')
    commit('initWidgetPosition')
  }
}

// 위젯 고유키 생성
function createWidgetKey () {
  return new Date().getTime().toString()
}

// 위젯 zindex 최대값 조회
function getMaxZindex (state) {
  const zindexList = state.widgetList.map(item => item.zindex)
  return zindexList.length ? Math.max(...zindexList) : 0
}

// 위젯 다음 zindex값 조회
function getNextZindex (state) {
  return getMaxZindex(state) + 1
}

// 위젯 이전 위치 및 사이즈 불러오기
function loadBfPositionAndSize (state, id) {
  const widget = state.widgetList.find(item => item.id === id)
  const { bfX, bfY, bfW, bfH } = widget
  return { bfX, bfY, bfW, bfH }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
