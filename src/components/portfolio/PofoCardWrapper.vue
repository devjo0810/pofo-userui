<template>
  <div class="pofo-card-wrapper" v-if="items.length">
    <component
      :is="pofoCardComponent"
      v-for="(item, i) in items"
      :key="i"
      v-bind="item"
    />
  </div>
</template>

<script>
import PofoLargeCard from './PofoLargeCard.vue'

export default {
  name: 'PofoCardWrapper',
  components: {
    PofoLargeCard
  },
  props: {
    pofoSize: {
      type: String, // sm, md, lg
      default: () => 'lg'
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    pofoCardComponent () {
      switch (this.pofoSize) {
        case 'lg':
          return 'PofoLargeCard'
        default:
          return 'PofoLargeCard'
      }
    }
  }
}
</script>
