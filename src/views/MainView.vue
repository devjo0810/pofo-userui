<template>
  <div class="main-view">
    <div class="main-content">
      <section class="category-section">
        <CmCategorySwiper
          displayKey="cateNm"
          :items="categoryList"
          @slideChange="slideChange"
        />
      </section>
      <section class="category-section">
        <CmCategoryBlock
          allYn="Y"
          valueKey="cateCd"
          displayKey="cateNm"
          :items="subCategoryList"
          @blockChange="blockChange"
        />
      </section>
      <section class="portfolio-section">
        <PofoCardWrapper
          pofoSize="lg"
          :items="pofoList"
        />
      </section>
    </div>
    <div class="sub-content">
      <section class="footer-section">footer</section>
    </div>
  </div>
</template>

<script>
import CmCategorySwiper from '@/components/common/CmCategorySwiper'
import CmCategoryBlock from '@/components/common/CmCategoryBlock'
import PofoCardWrapper from '@/components/portfolio/PofoCardWrapper'

export default {
  name: 'MainView',
  components: {
    CmCategorySwiper,
    CmCategoryBlock,
    PofoCardWrapper
  },
  data: () => ({
    categoryList: [
      {
        cateNm: 'cate1',
        cateCd: '100',
        child: [
          { cateNm: 'cate1-1', cateCd: '101' },
          { cateNm: 'cate1-2', cateCd: '102' },
          { cateNm: 'cate1-3', cateCd: '103' },
          { cateNm: 'cate1-4', cateCd: '104' }
        ]
      },
      { cateNm: 'cate2', cateCd: '200' },
      {
        cateNm: 'cate3',
        cateCd: '300',
        child: [
          { cateNm: 'cate3-1', cateCd: '301' },
          { cateNm: 'cate3-2', cateCd: '302' },
          { cateNm: 'cate3-3', cateCd: '303' }
        ]
      },
      { cateNm: 'cate4', cateCd: '400' },
      {
        cateNm: 'cate5',
        cateCd: '500',
        child: [
          { cateNm: 'cate5-1', cateCd: '501' },
          { cateNm: 'cate5-2', cateCd: '502' },
          { cateNm: 'cate5-3', cateCd: '503' },
          { cateNm: 'cate5-4', cateCd: '504' },
          { cateNm: 'cate5-5', cateCd: '505' },
          { cateNm: 'cate5-6', cateCd: '506' },
          { cateNm: 'cate5-7', cateCd: '507' },
          { cateNm: 'cate5-8', cateCd: '508' },
          { cateNm: 'cate5-9', cateCd: '509' },
          { cateNm: 'cate5-10', cateCd: '510' },
          { cateNm: 'cate5-11', cateCd: '511' },
          { cateNm: 'cate5-12', cateCd: '512' }
        ]
      },
      { cateNm: 'cate6', cateCd: '600' },
      { cateNm: 'cate7', cateCd: '700' },
      { cateNm: 'cate8', cateCd: '800' },
      { cateNm: 'cate9', cateCd: '900' },
      { cateNm: 'cate10', cateCd: '1000' }
    ],
    subCategoryList: null,
    pofoList: [
      { title: 'test1', cateCd: '100' },
      { title: 'test2', cateCd: '100' },
      { title: 'test3', cateCd: '100' },
      { title: 'test4', cateCd: '100' },
      { title: 'test5', cateCd: '100' },
      { title: 'test6', cateCd: '100' }
    ]
  }),
  methods: {
    slideChange (item) {
      console.log(item)
      this.subCategoryList = item.child || null
    },
    blockChange (item) {
      console.log(item)
    }
  }
}
</script>
