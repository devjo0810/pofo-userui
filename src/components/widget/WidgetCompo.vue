<template>
  <VueDraggableResizable
    v-show="!isMinimize"
    ref="widget"
    class="widget-component"
    :parent="parent"
    :min-width="widgetMinWidth"
    :min-height="widgetMinHeight"
    :drag-handle="dragHandle"
    :active.sync="widgetActive"
    :prevent-deactivation="true"
    :x="x"
    :y="y"
    :w="w"
    :h="h"
    :z="zindex"
    :draggable="!isFullSize"
    :resizable="!isFullSize"
    @dragging="handleDragging"
    @resizing="handleResizing"
  >
    <WidgetHeader
      :title="title"
      :isFullSize="isFullSize"
      @widgetHeaderClick="handleWidgetHeaderClick"
      @minimizeWidget="handleMinimizeWidget"
      @fullSizeWidget="handleFullSizeWidget"
      @smallSizeWidget="handleSmallSizeWidget"
      @closeWidget="handleCloseWidget"
    />
    <WidgetBody
      :compoName="compoName"
      :compoData="compoData"
      @widgetBodyClick="handleWidgetHeaderClick"
    />
  </VueDraggableResizable>
</template>

<script>
import WidgetHeader from './WidgetHeader'
import WidgetBody from './WidgetBody'
import VueDraggableResizable from 'vue-draggable-resizable'
import { WIDGET } from '@/config'
import { mapActions } from 'vuex'

export default {
  name: 'WidgetWrapper',
  components: {
    VueDraggableResizable,
    WidgetHeader,
    WidgetBody
  },
  props: {
    parent: { // 부모창 의존 여부
      type: Boolean,
      default: true
    },
    dragHandle: { // 위젯 핸들링 클래스명
      type: String,
      default: WIDGET.DRAG_HANDLE
    },
    compoName: { // Widget Body에 import할 클래스명
      type: String,
      required: true
    },
    title: { // Widget Header에 바인딩할 title
      type: String,
      default: 'Unknown'
    },
    compoData: { // Widget 컴포넌트에 전달할 데이터
      type: Object,
      default: () => ({})
    },
    id: { // 고유key
      type: String,
      required: true
    },
    x: { // x position
      type: Number,
      default: 0
    },
    y: { // y position
      type: Number,
      default: 0
    },
    w: { // width
      type: Number,
      default: 200
    },
    h: { // height
      type: Number,
      default: 200
    },
    zindex: { // zindex값
      type: Number,
      required: true
    },
    isFullSize: { // 전체화면 여부
      type: Boolean,
      default: false
    },
    isMinimize: { // 최소화 여부
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    widgetMinWidth: WIDGET.MIN_WIDTH,
    widgetMinHeight: WIDGET.MIN_HEIGHT,
    widgetHandles: WIDGET.HANDLES,
    widgetActive: false
  }),
  computed: {
    parentWidth () {
      const widget = this.$refs.widget
      return widget.parentWidth
    },
    parentHeight () {
      const widget = this.$refs.widget
      return widget.parentHeight
    }
  },
  methods: {
    ...mapActions({
      orderWidgetZindexAction: 'WidgetManager/orderWidgetZindex',
      fullSizingWidgetAction: 'WidgetManager/fullSizingWidget',
      smallSizingWidgetAction: 'WidgetManager/smallSizingWidget',
      closeWidgetAction: 'WidgetManager/closeWidget',
      updateWidgetPositionAction: 'WidgetManager/updateWidgetPosition',
      updateWidgetSizeAction: 'WidgetManager/updateWidgetSize',
      minimizingWidgetAction: 'WidgetManager/minimizingWidget'
    }),
    handleWidgetHeaderClick () {
      this.orderWidgetZindexAction(this.id)
    },
    handleWidgetBodyClick () {
      this.handleWidgetActive(true)
      this.orderWidgetZindexAction(this.id)
    },
    handleWidgetActive (isActive) {
      this.widgetActive = isActive
    },
    handleMinimizeWidget () {
      this.minimizingWidgetAction(this.id)
    },
    handleFullSizeWidget () {
      const params = {
        id: this.id,
        w: this.parentWidth,
        h: this.parentHeight
      }
      this.fullSizingWidgetAction(params)
    },
    handleSmallSizeWidget () {
      this.smallSizingWidgetAction(this.id)
    },
    handleCloseWidget () {
      this.closeWidgetAction(this.id)
    },
    handleDragging (x, y) {
      const params = { id: this.id, x, y }
      this.updateWidgetPositionAction(params)
      // console.log('handleDragging', x, y)
    },
    handleResizing (x, y, w, h) {
      const params = { id: this.id, x, y, w, h }
      this.updateWidgetSizeAction(params)
      // console.log('handleResizing', x, y, w, h)
    }
  }
}
</script>

<style lang="scss">
.widget-component {
  background-color: #ffffff;
  border: 1px solid #000000;
}
.handle {
  width: 8px;
  height: 8px;
  background: none;
  border: none;
  margin: 0;
  z-index: 1;
  &-tl { top: 0; left: 0; z-index: 2; }
  &-tm { top: 0; left: 0; width: 100%; }
  &-tr { top: 0; right: 0; z-index: 2; }
  &-ml { top: 0; left: 0; height: 100%; }
  &-mr { top: 0; right: 0; height: 100%; }
  &-bl { bottom: 0; left: 0; z-index: 2; }
  &-bm { bottom: 0; left: 0; width: 100%; }
  &-br { bottom: 0; right: 0; z-index: 2; }
}
</style>
