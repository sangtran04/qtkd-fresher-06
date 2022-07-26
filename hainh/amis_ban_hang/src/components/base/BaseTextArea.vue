<template>
  <div class="text-area-wrap">
    <textarea
      class="text-area"
      :class="{ 'text-area--error': hasErrorMessageFunc }"
    ></textarea>
    <label v-if="hasErrorMessageFunc" for="">{{ contentError }}</label>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '76px',
    },
    // có error không?
    hasError: {
      type: Boolean,
      default: false,
    },
    isReadonly: {
      type: Boolean,
      default: false,
    },
    contentError: {
      type: String,
      default: 'Error message',
    },
    hasErrorMessage: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    /**
     * Hàm kiểm tra xem có error không?
     */
    hasErrorMessageFunc() {
      return this.hasErrorMessage
    },
  },
}
</script>
<style scoped>
.text-area-wrap {
  flex: 1;
}
.text-area-wrap > label {
  color: red;
}
textarea {
  width: v-bind(width);
  height: v-bind(height);
  resize: none;
  border-radius: 4px;
  border-color: #ccc;
  padding: 8px 16px;
  -webkit-transition: border-color ease-in-out 0.15s,
    box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  max-height: 500px;
}
textarea:focus {
  border-color: #4262f0;
  outline: none;
}
.text-area--error {
  border-color: red;
}
</style>
