<template>
  <div class="m-tab" :class="{ checked: isChecked }">
    <slot></slot>
    <div class="tab-content">{{ tabContent }}</div>
    <span></span>
  </div>
</template>

<script>
export default {
  props: {
    // chỉ định nội dung cho tab
    tabContent: {
      type: String,
      required: true,
    },

    // tab có đang được chọn không ?
    checked: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    // hàm kiểm tra: slider tab có được chọn không ?
    isChecked() {
      return this.checked
    },
  },
}
</script>

<style>
.m-tab {
  display: flex;
  height: 4rem;
  margin-right: 32px;
  position: relative;
  align-items: center;
  cursor: pointer;
  /* padding: 0 16px;
  transition: all 0.3s ease-in-out; */
}

/* .m-tab:hover {
  background-color: #f0f2f4;
} */

.m-tab.checked > span {
  position: absolute;
  background-color: #4262f0;
  height: 2px;
  width: 100%;
  top: calc(100% - 2px);
}

.m-tab.checked > .m-tab__icon,
.m-tab.checked > .tab-content {
  color: #4262f0;
}

.m-tab__icon {
  margin-right: 8px;
}

.tab-content {
  white-space: nowrap;
}
</style>
