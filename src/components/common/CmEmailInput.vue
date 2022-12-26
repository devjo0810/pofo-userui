<template>
  <div class="common-input-email">
    <label>이메일 주소</label>
    <input type="email" :value="value" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'CmEmailInput',
  props: {
    value: {
      type: String,
      required: true
    }
  }
}
</script>
