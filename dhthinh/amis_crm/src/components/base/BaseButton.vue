<template>
  <div class="crm-button" :class="{ disabled: isDisabled }">
    <button type="button" :class="{ 'button-icon': hasIconFunction }">
      <div v-if="hasIconFunction" class="icon-plus"></div>
      <div class="button__content">{{ buttonContent }}</div>
    </button>
    <div class="menu-trigger"></div>
  </div>
</template>


<script>
export default {
  props: {
    // thiết lập nội dung button
    buttonContent: {
      type: String,
      required: true,
    },
    // thiết lập màu nền
    backgroundColor: {
      type: String,
      default: '#4262F0',
    },
    // thiết lập màu khi hover vào
    backgroundColorHover: {
      type: String,
      default: '#4262F0',
    },

    //Thiết lập màu chữ
    color: {
      type: String,
      default: "#000"
    },
    //Thiết lập màu khi hover
    colorHover : {
      type: String,
      default: "#000"
    },

    // button có icon không
    isIcon: {
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
    isIconFunction() {
      return this.isIcon
    },
    isDisabled() {
      return this.disabled
    },
  },
}
</script>

<style scoped>
.crm-button {
  position: relative;
  cursor: pointer;
  background-color: v-bind(backgroundColor);
  color: v-bind(color);
  outline: none;
  border: none;
  border-radius: 4px;
  height: 32px;
  display: flex;
  align-items: center;
}

.crm-button > button {
  display: flex;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0 16px;
  height: 100%;
  align-items: center;
}

.crm-button > .button-icon {
  padding-left: 0;
  border-right: 1px solid #fff;
}

.button__content {
  color: #fff;
}

.crm-button .disable {
  background-color: #4262f0;
}

.icon-plus {
  margin: 0 8px;
}

.menu-trigger {
  width: 32px;
  height: 32px;
  position: relative;
  display: none;
}

.button-icon ~ .menu-trigger {
  display: block;
}

.menu-trigger::before {
  content: '';
  width: 16px;
  height: 16px;
  display: inline-block;
  background: transparent url(../../assets/Resource/img/icon_collection.svg)
    no-repeat -80px -160px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.menu-trigger:hover {
  background-color: #2b4eee;
}

button:hover {
  color: v-bind(colorHover);
  background-color: v-bind(backgroundColorHover);
}

.crm-button.disabled {
  background-color: rgba(66, 98, 240, 0.6);
  pointer-events: none;
}
</style>