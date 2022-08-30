<template>
  <div class="widget-header">
    <section class="title-section widget-drag-handle">
      <p>{{ title }}</p>
    </section>
    <section class="btn-section">
      <button>_</button>
      <button>ㅁ</button>
      <button>X</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'WidgetHeader',
  props: ['title']
}
</script>

<style lang="scss" scoped>
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
    padding-left: 5px;
  }
  .btn-section {
    display: flex;
    align-items: center;
    margin-left: auto;
    button {
      border: 0;
      margin-right: 5px;
    }
  }
}
</style>
