<template>
  <div class="crm-boxtoastmesage" :class="{ showtoast: isShowToast }">
    <div class="crm-toastmessage">
      <div class="crm-toastmessage__icon">
        <slot></slot>
      </div>
      <div class="crm-toastmessage__content">{{ toastContent }}</div>
      <div class="crm-toastmessage__close">
        <div class="icon-close"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseToastMessage",
  component: {},
  props: {
    //Nội dung của toast message
    toastContent: {
      type: String,
      require: true,
    },

    //Màu nền của toast message
    backgroundColor: {
      type: String,
      default: "#fff",
    },
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    /**
     * Có hiển thị toast message hay không
     * Author: DHTHINH (20/07/2022)
     */
    isShowToast() {
      return this.isShow ? true : false;
    },
  },
};
</script>

<style>
.crm-boxtoastmesage {
  display: none;
  position: fixed;
  bottom: 32px;
  right: 32px;
}

.showtoast {
  display: block;
}

.crm-toastmessage {
  display: flex;
  align-items: center;
  border-radius: 4px;
  background-color: v-bind(backgroundColor);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  animation: slideInleft ease .7s, fadeOut linear 1s 3s forwards;
}

@keyframes slideInleft {
    from {
        transform: translateX(calc(100% + 32px));
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 100%;
    }
}

@keyframes fadeOut {
    to {
        opacity: 0;
    }
}

.crm-toastmessage__icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.crm-toastmessage__content {
  padding: 11px 0px;
  font-size: 13px;
  color: #fff;
}

.crm-toastmessage__close {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}

.crm-toastmessage__close:hover {
  opacity: 0.6;
}
</style>