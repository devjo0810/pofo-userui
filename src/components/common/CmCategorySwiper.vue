<template>
    <Swiper
      class="swiper category-swiper"
      :options="categorySwiperOption"
      ref="categorySwiper"
      @slideChange="slideChange"
    >
      <SwiperSlide v-for="(item, i) in items" :key="i">
        <span>{{ item[displayKey] }}</span>
      </SwiperSlide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'CmCategorySwiper',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    displayKey: {
      type: String,
      default: () => 'title',
      required: false
    },
    items: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    categorySwiperOption: {
      init: false,
      loop: true,
      centeredSlides: true,
      // loopedSlides: 5,
      spaceBetween: 10,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true,
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
      }
    }
  }),
  computed: {
    categorySwiper () {
      return this.$refs.categorySwiper.$swiper
    }
  },
  methods: {
    async init () {
      await this.$nextTick()
      this.categorySwiper.init()
    },
    slideChange () {
      const realIndex = this.categorySwiper.activeIndex % this.items.length
      this.$emit('slideChange', this.items[realIndex])
    }
  },
  mounted () {
    this.init()
  }
}
</script>
