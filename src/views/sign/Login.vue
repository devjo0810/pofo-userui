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
        <header class="login-header">
          <h1>로그인</h1>
          <form id="EmailForm" @submit.prevent="test">
            <div>
              <p class="m-xs-0">
                신규 사용자이신가요?
                <a>계정 만들기</a>
              </p>
              <CmEmailInput v-model="email" />
              <!-- <CmEmailInput :value="email" @input="inputHandler" /> -->
              <div class="divide-area"></div>
              <div class="submit-button">
                <button>
                  <span>계속</span>
                </button>
              </div>
            </div>
          </form>
        </header>
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
    }
  }
}
</script>
