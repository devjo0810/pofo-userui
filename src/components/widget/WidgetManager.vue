<template>
  <div class="widget-manager">
    <WidgetCompo
      v-for="(widget, i) in widgetList"
      :key="i"
      v-bind="widget"
    />
  </div>
</template>

<script>
import WidgetCompo from './WidgetCompo'

export default {
  name: 'WidgetManager',
  components: {
    WidgetCompo
  },
  data: () => ({
    widgetList: [
      {
        title: 'Signup',
        compoName: 'Signup'
      },
      {
        title: 'Grid',
        compoName: 'Grid'
      },
      {
        title: 'Tree',
        compoName: 'Tree'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.widget-manager {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
