<template>
  <ul class="category-block-wrap" v-if="displayItems.length">
    <li
      class="category-block"
      v-for="(item, i) in displayItems"
      :key="i"
      :class="{ active: currentIndex === i }"
      @click="changeCurrentIndex(i)"
    >
      <span>{{ item[displayKey] }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CmCategoryBlock',
  props: {
    displayKey: { // 화면 표시 키값
      type: String,
      default: () => 'title'
    },
    valueKey: { // value값
      type: String,
      default: () => 'value'
    },
    allYn: { // 전체항목 여부
      type: String, // Y, N
      default: () => 'N'
    },
    items: { // 항목
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    displayItems: [],
    currentIndex: -1
  }),
  computed: {
    allYnItem () {
      return { [this.displayKey]: '전체', [this.valueKey]: '' }
    }
  },
  watch: {
    allYn () {
      this.updateDisplayItems()
    },
    items () {
      this.updateDisplayItems()
    }
  },
  methods: {
    async init () {
      this.updateDisplayItems()
    },
    updateDisplayItems () {
      if (!this.items || !this.items.length) {
        this.displayItems = []
        this.changeCurrentIndex(-1)
        return
      }
      if (this.allYn === 'Y') { // 전체항목 포함일경우
        this.displayItems = [
          { ...this.allYnItem }, ...this.items
        ]
      } else {
        this.displayItems = [...this.items]
      }
      this.changeCurrentIndex(0)
    },
    changeCurrentIndex (index) {
      this.currentIndex = index
      this.$emit('blockChange', this.displayItems[index])
    }
  },
  mounted () {
    this.init()
  }
}
</script>
