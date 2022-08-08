<template>
  <div class="main-layout">
    <MainHeader />
    <router-view />
  </div>
</template>

<script>
import MainHeader from './MainHeader'

export default {
  name: 'MainLayout',
  components: {
    MainHeader
  }
}
</script>
