<template>
  <div class="login-view">
    <div class="container">
      <section class="logo-section">
        <img
          class="context-header-icon"
          src="https://static.adobelogin.com/clients/behance-2020/4x_b431ffdf8fed1c95074548ecb9d4920e.png"
          alt="pofo-Logo"
        />
        <p class="h1 mb-2 context-header-title">PoFo</p>
      </section>
      <section class="login-section">
        <div class="form-content">
          <header class="login-header">
            <h1 class="login-text mb-xs-1">로그인</h1>
            <b-form id="EmailForm" @submit.prevent="test">
              <div>
                <p class="form-label">
                  신규 사용자이신가요?
                  <a @click="$router.push('/sign')">계정 만들기</a>
                </p>
                <CmEmailInput v-model="email"/>
                <!-- <CmEmailInput :value="email" @input="inputHandler" /> -->
                <div class="submit-button">
                  <button
                    class="next-input btn btn-primary btn-lg"
                  >
                    계속
                  </button>
                </div>
                <div class="common-input-password">
                  <label>이메일 주소</label>
                  <input
                    type="password"
                    class="form-control"
                    :value="value"
                    @input="$emit('input', $event.target.value)"
                  />
                </div>
                <hr align="center" />
              </div>
            </b-form>
          </header>
          <section class="login-button-section">
            <button class="btn btn-dark btn-lg btn-apple" @click="appleLogin">Apple로 계속</button>
            <button class="btn btn-outline-secondary btn-lg btn-google" @click="googleLogin">Google로 계속</button>
            <button class="btn btn-primary btn-lg btn-facebook" @click="fbLogin">Facebook로 계속</button>
          </section>
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
    test () {
      // if (this.email) {
      //   this.$router.push('/')
      // }
      console.log(this.email)
    },

    /* 소셜 로그인 */
    appleLogin () {
      this.$dialog.alert('애플로그인')
    },
    googleLogin () {
      this.$dialog.alert('구글로그인')
    },
    fbLogin () {
      this.$dialog.alert('페북로그인')
    }
  }
}
</script>
