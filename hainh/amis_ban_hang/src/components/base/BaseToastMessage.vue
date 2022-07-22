<template>
  <div
    class="base-toast-msg"
    :class="{
      'toast-information': isInformation,
      'toast-warning': isWarning,
      'toast-success': isSuccess,
      'toast-error': isError,
    }"
  >
    <div
      :class="{
        'icon-information': isInformation,
        'icon-warning': isWarning,
        'icon-success': isSuccess,
        'icon-error': isError,
      }"
    ></div>
    <div>{{ toastMessage }}</div>
    <div class="icon-multip-white"></div>
  </div>
</template>

<script>
/**
 * Base Toast Message
 * Author: Hai
 * Date: 19/07/2022
 */
export default {
  props: {
    // xác định kiểu toast
    type: {
      type: String,
      required: true,
      // chỉ được chuyền cac giá trị ['information','error','warning','success']
      validator(type) {
        return ['information', 'error', 'warning', 'success'].includes(type)
      },
    },
    //chỉ định nội dung toast
    toastMessage: {
      type: String,
      required: true,
    },
  },
  computed: {
    isInformation() {
      return this.type === 'information'
    },

    isWarning() {
      return this.type === 'warning'
    },

    isError() {
      return this.type === 'error'
    },

    isSuccess() {
      return this.type === 'success'
    },
  },
}
</script>

<style>
.base-toast-msg {
  display: flex;
  align-items: center;
  height: 4rem;
  width: fit-content;
  border-radius: 4px;
}
.base-toast-msg > div {
  font-weight: 500;
  color: #fff;
}
.toast-information {
  background-color: #4262f0;
}

.toast-warning {
  background-color: #f07d42;
}
.toast-success {
  background-color: #31b491;
}
.toast-error {
  background-color: #ec4141;
}

.icon-information,
.icon-warning,
.icon-success,
.icon-error {
  margin: 0 16px;
}

.icon-multip-white {
  margin: 0 12px 0 16px;
}
</style>
