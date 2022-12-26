<template>
  <header class="main-header">
    <p @click="$router.push('/')">PoFo</p>
    <a @click="$router.push('/search')">검색</a>
    <a @click="$router.push('/template/widget')">위젯</a>
    <div class="btn-area">
      <b-button @click="$router.push('/login')">로그인</b-button>
      <b-button>회원가입</b-button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>
