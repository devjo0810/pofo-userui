<template>
  <div class="no-layout" :class="isImgClass">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'NoLayout',
  computed: {
    isImgClass () {
      if (this.$route.meta.isImg) return 'background-img'
      else return ''
    }
  }
}
</script>
