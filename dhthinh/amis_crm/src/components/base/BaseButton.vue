<template>
  <button class="crm-button" :class="{ disabled: isDisabled }">
    <div class="crm-button__icon">
      <div :class="{iconaddwhite: isIcon}">

      </div>
    </div>
    <div class="crm-button__content">
      {{buttonContent}}
      <slot></slot>
    </div>
    <div v-if="isDown" class="crm-button__down" >
      <div class="icon-down"></div>
    </div>
  </button>
</template>


<script>
export default {
  props: {
    //Thiết lập chiều rộng cho button
    width: {
      type: String,
    },
    //Thiết lập chiều cao cho  button
    height: {
      type: String,
      default: "32px",
    },
    // thiết lập nội dung button
    buttonContent: {
      type: String,
      required: true,
    },
    // thiết lập màu nền
    backgroundColor: {
      type: String,
      default: "#ffffff",
    },
    // thiết lập màu khi hover vào
    backgroundColorHover: {
      type: String,
      default: "#2B4EEE"
    },

    //Thiết lập màu chữ
    color: {
      type: String,
      default: "#000"
    },
    //Thiết lập màu khi hover
    colorHover : {
      type: String,
      default: "#fff"
    },

    // button có icon không
    hasIcon: {
      type: Boolean,
      default: false,
    },

    // button có dropdown không
    hasDown:{
      type: Boolean,
      default: false,
    },

    // button có thuộc tính disabled không
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isIcon() {
      return this.hasIcon
    },

    isDown() {
      return this.hasDown
    },

    isDisabled() {
      return this.disabled
    },
  },
}
</script>

<style scoped>
.crm-button {
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  border: 0;
  border-radius: 4px;
  color: v-bind(color);
  background-color: v-bind(backgroundColor);
  min-height: 32px;
  width: v-bind(width);
  height: v-bind(height);
}

.crm-button:hover {
  background-color: v-bind(backgroundColorHover);
  /* color: v-bind(colorHover); */
}

.crm-button__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px;
}

.crm-button__content {
  display: flex;
  padding-right: 16px;
}

.crm-button__down {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 8px;
  border-left: solid 1px #fff;
}

.disabled {
  background-color: rgba(66, 98, 240, 0.6);
  pointer-events: none;
}

</style>