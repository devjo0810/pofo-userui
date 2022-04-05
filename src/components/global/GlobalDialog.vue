<template>
  <div
    class="global-dialog-layout"
    v-if="isShow"
  >
    <b-card class="global-dialog" :title="title">
      <b-card-text>{{ message }}</b-card-text>
      <template v-if="type === 'alert'">
        <b-button @click="close(true)">확인</b-button>
      </template>
      <template v-if="type === 'confirm'">
        <b-button @click="close(true)">확인</b-button>
        <b-button @click="close(false)">취소</b-button>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'GlobalDialog',
  data: () => ({
    isShow: false,
    title: '알림',
    message: '',
    type: 'alert',
    promiseResolve: null,
    promiseReject: null
  }),
  methods: {
    close (flag) {
      try {
        this.isShow = false
        if (this.promiseResolve) this.promiseResolve(flag)
      } catch (e) {
        if (this.promiseReject) this.promiseReject(e)
      }
    }
  }
}
</script>
