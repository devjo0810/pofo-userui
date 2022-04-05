<template>
  <div>
    <b-button @click="alertOpen">Alert</b-button>
    <b-button @click="confirmOpen">Confirm</b-button>
    <b-button @click="spinnerShow">Spinner</b-button>
  </div>
</template>

<script>
export default {
  name: 'SearchSample',
  methods: {
    alertOpen () {
      this.$dialog.alert('test')
    },
    confirmOpen () {
      this.$dialog.confirm('test')
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
