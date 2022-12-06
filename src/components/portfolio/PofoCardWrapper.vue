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
import PofoProfileCard from './PofoProfileCard.vue'
import { POFO } from '@/config'

export default {
  name: 'PofoCardWrapper',
  components: {
    PofoProfileCard
  },
  props: {
    pofoType: {
      type: Number, // 1: Profile, 2: Project
      default: POFO.TYPE.PROFILE
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    pofoCardComponent () {
      return POFO.COMPO[this.pofoType]
    }
  }
}
</script>
