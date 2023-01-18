<template>
  <div class="sign-view">
    <div class="container">
      <section class="logo-section">
        <img
          class="context-header-icon"
          src="https://static.adobelogin.com/clients/behance-2020/4x_b431ffdf8fed1c95074548ecb9d4920e.png"
          alt="pofo-Logo"
        />
        <p class="h1 mb-2 context-header-title">PoFo</p>
      </section>
      <section class="sign-section">
        <div class="sign-content">
          <header>
            <h1 class="mb-xs-1">계정 만들기</h1>
            <div class="sns-sign-section">
              <button class="btn btn-dark btn-lg btn-apple" @click="appleSign">apple</button>
              <button class="btn btn-outline-secondary btn-lg btn-google" @click="googleSign">Google</button>
              <button class="btn btn-primary btn-lg btn-facebook" @click="fbSign">Facebook</button>
            </div>
          </header>
          <hr align="center"/>
        </div>
        <div class="sign-form">
          <h2 class="mb-xs-1">이메일로 등록</h2>
          <h4 class="text-muted">이미 계정이 있으십니까?<a @click="$router.push('/login')">로그인</a></h4>
          <CmEmailInput v-model="email"/>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import CmEmailInput from '@/components/common/CmEmailInput.vue'
export default {

  components: {
    CmEmailInput
  },
  data: () => ({
    email: ''
  }),

  methods: {
    appleSign () {
      this.$dialog.alert('이미지 클릭 시 apple 계정으로 회원가입')
    },
    googleSign () {
      this.$dialog.alert('이미지 클릭 시 Google 계정으로 회원가입')
    },
    fbSign () {
      this.$dialog.alert('이미지 클릭 시 FB 계정으로 회원가입')
    }
  }
}
</script>
