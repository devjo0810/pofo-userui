<template>
  <div
    class="widget-body"
    @click="$emit('widgetBodyClick')"
  >
    <component
      v-if="component"
      :is="component"
      v-bind="compoData"
    />
  </div>
</template>

<script>
import Loading from './menus/WidgetMenuLoading'
import NotFound from './menus/WidgetMenuNotFound'

export default {
  name: 'WidgetBody',
  components: {
    Loading,
    NotFound,
    Grid: () => import('./menus/WidgetMenuGrid'),
    Signup: () => import('./menus/WidgetMenuSignup'),
    Tree: () => import('./menus/WidgetMenuTree')
  },
  props: {
    compoName: { // Widget 컴포넌트명
      type: String,
      default: 'Loading'
    },
    compoData: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    component () {
      let menuName = this.compoName
      if (!this.$options.components[menuName]) {
        // 지정된 컴포넌트가 아닐경우 NotFound로 처리
        menuName = 'NotFound'
      }
      return menuName
    }
  }
}
</script>

<style lang="scss">
.widget-body {
  padding: 8px;
  width: 100%;
  height: calc(100% - 32px);
}
</style>
