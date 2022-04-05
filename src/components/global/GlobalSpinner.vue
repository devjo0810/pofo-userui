<template>
  <div class="global-spinner-layout" v-if="isShow">
    <b-spinner />
  </div>
</template>

<script>
export default {
  name: 'GlobalSpinner',
  data: () => ({
    isShow: false
  })
}
</script>
