<template>
  <div class="template-widget">
    <WidgetManager />
  </div>
</template>

<script>
import WidgetManager from '@/components/widget/WidgetManager'

export default {
  name: 'TemplateWidget',
  components: {
    WidgetManager
  }
}
</script>

<style lang="scss" scoped>
.template-widget {
  width: 100%;
  height: 100%;
}
</style>
