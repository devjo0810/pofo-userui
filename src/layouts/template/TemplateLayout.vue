<template>
  <div class="template-layout">
    <TemplateSideBar />
    TemplateLayout
    <router-view />
  </div>
</template>

<script>
import TemplateSideBar from './TemplateSideBar.vue'

export default {
  name: 'TemplateLayout',
  components: {
    TemplateSideBar
  }
}
</script>
