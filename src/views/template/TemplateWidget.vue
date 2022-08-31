<template>
  <div class="template-widget">
    <div class="sample">
      <button
        v-for="(item, i) in menuList"
        :key="i"
        @click="createWidget(item)"
      >{{ item.title }}</button>
      <button @click="$router.push('/')">홈</button>
    </div>
    <WidgetManager />
  </div>
</template>

<script>
import WidgetManager from '@/components/widget/WidgetManager'
import { mapActions } from 'vuex'

export default {
  name: 'TemplateWidget',
  components: {
    WidgetManager
  },
  data: () => ({
    menuList: [
      {
        title: 'Signup',
        compoName: 'Signup',
        w: 500,
        h: 500
      },
      {
        title: 'Grid',
        compoName: 'Grid',
        w: 500,
        h: 300
      },
      {
        title: 'Tree',
        compoName: 'Tree',
        w: 300,
        h: 500
      },
      {
        title: 'Card',
        compoName: 'Card',
        w: 250,
        h: 250
      }
    ]
  }),
  methods: {
    ...mapActions({
      createWidgetAction: 'WidgetManager/createWidget'
    }),
    createWidget (item) {
      this.createWidgetAction(item)
    }
  }
}
</script>

<style lang="scss" scoped>
.template-widget {
  width: 100%;
  height: 100%;
}
</style>
