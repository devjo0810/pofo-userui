<template>
  <header class="main-header">
    <p @click="moveMainView">PoFo</p>
    <a @click="moveSearchView">검색</a>
    <div class="btn-area">
      <b-button>로그인</b-button>
      <b-button>회원가입</b-button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  methods: {
    moveMainView () {
      this.$router.push('/')
    },
    moveSearchView () {
      this.$router.push('/search')
    }
  }
}
</script>
