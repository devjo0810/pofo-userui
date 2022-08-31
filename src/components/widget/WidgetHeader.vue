<template>
  <div
    class="widget-header"
    @click="$emit('widgetHeaderClick')"
  >
    <section class="title-section widget-drag-handle">
      <p>{{ title }}</p>
    </section>
    <section class="btn-section">
      <button
        @click="$emit('minimizeWidget')"
      ><font-awesome-icon icon="window-minimize" /></button>
      <button
        v-if="!isFullSize"
        @click="$emit('fullSizeWidget')"
      ><font-awesome-icon icon="maximize" /></button>
      <button
        v-if="isFullSize"
        @click="$emit('smallSizeWidget')"
      ><font-awesome-icon icon="minimize" /></button>
      <button
        @click="$emit('closeWidget')"
      ><font-awesome-icon icon="xmark" /></button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'WidgetHeader',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    isFullSize: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.widget-header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 32px;
  background-color: #eeeeee;
  .widget-drag-handle {
    cursor: move;
    width: 100%;
    height: 100%;
  }
  .title-section {
    display: flex;
    align-items: center;
    padding-left: 8px;
  }
  .btn-section {
    display: flex;
    margin-left: auto;
    height: 100%;
    font-size: 1.1rem;
    button {
      height: 100%;
      width: 32px;
      padding: 0;
      border: 0;
      transition: all 0.3s ease;
      &:hover {
        background-color: #cccccc;
      }
    }
  }
}
</style>
