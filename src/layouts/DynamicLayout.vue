<template>
  <component :is="layoutName" />
</template>

<script>
import NoLayout from './NoLayout.vue'
import MainLayout from './main/MainLayout.vue'
import AdminLayout from './admin/AdminLayout.vue'

export default {
  name: 'DynamicLayout',
  components: {
    NoLayout,
    MainLayout,
    AdminLayout
  },
  computed: {
    layoutName () {
      const layout = this.$route.meta.layout || 'No'
      return layout + 'Layout'
    }
  }
}
</script>
