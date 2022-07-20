<template>
  <div class="baseButton" :class="{ disabled: isDisabled }">
    <button type="button" :class="{ 'button-icon': hasIconFunc }">
      <div v-if="hasIconFunc" class="icon-plus"></div>
      <div class="buttonContent">{{ buttonContent }}</div>
    </button>
    <div class="menu-trigger"></div>
  </div>
</template>

<script>
export default {
  props: {
    // Chỉ định nội dung button
    buttonContent: {
      type: String,
      required: true,
    },
    // chỉ định màu nền
    backgroundColor: {
      type: String,
      default: '#4262F0',
    },
    // button có icon không
    hasIcon: {
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
    hasIconFunc() {
      return this.hasIcon
    },
    isDisabled() {
      return this.disabled
    },
  },
}
</script>

<style scoped>
.baseButton {
  position: relative;
  cursor: pointer;
  background-color: v-bind(backgroundColor);
  outline: none;
  border: none;
  border-radius: 4px;
  height: 32px;
  display: flex;
  align-items: center;
}

.baseButton > button {
  display: flex;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0 16px;
  height: 100%;
  align-items: center;
}

.baseButton > .button-icon {
  padding-left: 0;
  border-right: 1px solid #fff;
}

.buttonContent {
  color: #fff;
}

.baseButton .disable {
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
  border-radius: 4px;
}

button:hover {
  background-color: #2b4eee;
  border-radius: 4px;
}

.baseButton.disabled {
  background-color: rgba(66, 98, 240, 0.6);
  pointer-events: none;
}
</style>
