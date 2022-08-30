<template>
  <component :is="component" v-if="component" />
</template>

<script>
// import WidgetMenuGrid from '@/components/widget/menus/WidgetMenuGrid'
// import WidgetMenuSignup from '@/components/widget/menus/WidgetMenuSignup'
// import WidgetMenuTree from '@/components/widget/menus/WidgetMenuTree'
// import WidgetMenuLoading from '@/components/widget/menus/WidgetMenuLoading'
// import WidgetMenuNotFound from '@/components/widget/menus/WidgetMenuNotFound'
// import { defineAsyncComponent } from 'vue'

export default {
  name: 'WidgetBody',
  props: ['compoName'],
  data: () => ({
    component: null
  }),
  computed: {
    loader () {
      const menuName = this.compoName || 'NotFound'
      // return `WidgetMenu${compoName}`
      // return () => import(`./menus/WidgetMenu${menuName}`)
      return menuName
    }
  },
  async mounted () {
    // await import(`./menus/WidgetMenu${this.compoName}`)
    // this.loader()
    //   .then(() => {
    //       this.component = () => this.loader()
    //   })
    //   .catch(() => {
    //       this.component = () => import('./menus/WidgetMenuNotFound')
    //   })
  }
}
</script>
