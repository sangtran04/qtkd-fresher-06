<template>
  <div class="crm-button" :class="{ disabled: isDisabled }">
    <button type="button" :class="{ 'button-icon': hasIcon }">
      <div v-if="hasIconCheck" class="icon-plus"></div>
      <div class="button-content">{{ buttonContent }}</div>
    </button>
    <div class="arrow"><div class="icon-down"></div></div>
  </div>
</template>

<script>
export default {
  props: {
    // Quy định nội dung chữ của button
    buttonContent: {
      type: String,
      required: true,
    },
    // Quy định màu nền của button
    backgroundColor: {
      type: String,
      default: "#4262F0",
    },
    // Quy định icon của button hoặc không
    hasIcon: {
      type: Boolean,
      default: false,
    },
    // Button có disable không?
    disabled: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "86px",
    },
    display: {
      type: String,
      default: "none",
    },
    notIcon: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    hasIconCheck() {
      return this.hasIcon;
    },
    isDisabled() {
      return this.disabled;
    },
    notIconCheck() {
      return this.notIcon;
    },
  },
};
</script>

<style scoped>
@import url("../../assets/icon.css");
* {
  box-sizing: border-box;
}

.crm-button {
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

.crm-button button {
  display: flex;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0 16px;
  height: 100%;
  align-items: center;
  width: v-bind(width);
}
.crm-button > .button-icon {
  padding-left: 0;
  border-right: 1px solid #fff;
}
.button-content {
  color: #fff;
}
.crm-button .disable {
  background-color: #4262f0;
}

.crm-button > .arrow {
  width: 32px;
  height: 32px;
  position: relative;
}
.arrow {
  display: v-bind(display);
}
.icon-down {
  position: absolute;
  margin: 41%;
}
.icon-plus {
  margin: 0 8px;
}

.arrow:hover {
  background-color: #2b4eee;
  border-radius: 4px;
}
button:hover {
  background-color: #2b4eee;
  border-radius: 4px;
}
.crm-button.disabled {
  background-color: rgba(66, 98, 240, 0.6);
  pointer-events: none;
}
</style>
