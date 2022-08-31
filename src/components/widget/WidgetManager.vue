<template>
  <div
    class="widget-manager"
    ref="widgetManager"
  >
    <WidgetCompo
      v-for="widget in widgetList"
      :key="widget.id"
      v-bind="widget"
    />
  </div>
</template>

<script>
import WidgetCompo from './WidgetCompo'
import { mapGetters } from 'vuex'

export default {
  name: 'WidgetManager',
  components: {
    WidgetCompo
  },
  computed: {
    ...mapGetters({
      widgetList: 'WidgetManager/getWidgetList'
    })
  }
}
</script>

<style lang="scss">
.widget-manager {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
