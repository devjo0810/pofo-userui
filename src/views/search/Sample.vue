<template>
  <div>
    <PortfolioCard />
    <b-button @click="alertOpen">Alert</b-button>
    <b-button @click="confirmOpen">Confirm</b-button>
    <b-button @click="spinnerShow">Spinner</b-button>
  </div>
</template>

<script>
import PortfolioCard from '@/components/portfolio/PortfolioCard.vue'

export default {
  name: 'SearchSample',
  components: {
    PortfolioCard
  },
  methods: {
    alertOpen () {
      this.$dialog.alert('Sample Update')
    },
    confirmOpen () {
      this.$dialog.confirm('test...Hello asdfasdfadf')
    },
    spinnerShow () {
      this.$spinner.show()
      setTimeout(() => {
        this.$spinner.hide()
      }, 3000)
    }
  }
}
</script>
