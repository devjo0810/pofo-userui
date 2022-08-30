<template>
  <VueDraggableResizable
    class="widget-component"
    :parent="parent"
    :min-width="widgetMinWidth"
    :min-height="widgetMinHeight"
    :drag-handle="dragHandle"
  >
    <WidgetHeader
      :title="title"
    />
    <WidgetBody
      :compoName="compoName"
    />
  </VueDraggableResizable>
</template>

<script>
import WidgetHeader from './WidgetHeader'
import WidgetBody from './WidgetBody'
import VueDraggableResizable from 'vue-draggable-resizable'
import { WIDGET } from '@/config'

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
    }
  },
  data: () => ({
    widgetMinWidth: WIDGET.MIN_WIDTH,
    widgetMinHeight: WIDGET.MIN_HEIGHT,
    widgetHandles: WIDGET.HANDLES
  })
}
</script>

<style lang="scss">
.widget-component {
  background-color: #ffffff;
  border: 1px solid #000000;
}
.handle {
  background: none;
  border: none;
}
</style>
