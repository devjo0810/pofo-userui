<template>
  <transition name="fade">
    <div class="global-spinner-layout" v-if="isShow">
      <b-spinner
        style="width: 4rem; height: 4rem;"
        variant="primary"
        type="grow"
      />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'GlobalSpinner',
  data: () => ({
    isShow: false
  })
}
</script>
