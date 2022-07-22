<template>
  <div class="crm-tab" :class="{ checked: isChecked }">
    <slot></slot>
    <div class="tab-content">{{ tabContent }}</div>
    <span></span>
  </div>
</template>

<script>
export default {
  props: {
    // Khai báo các props trong BaseTab
    tabContent: {
      type: String,
      required: true,
    },
    // Trạng thái của tab có được chọn chưa?
    checked: {
      type: Boolean,
      default: false,
    },
  },
  class: {
    type: String
  },
  computed: {
    // Function kiểm tra liệu rằng tabs đã được chọn?
    isChecked() {
      return this.checked;
    },
  },

};
</script>

<style>

.crm-tab {
  display: flex;
  height: 40px;
  margin-right: 32px;
  margin-left: 8px;
  align-items: center;
  cursor: pointer;
  position: relative;
}
.crm-tab.checked > span {
  position: absolute;
  background-color:  #4262f0;
  height: 2px;
  width: 100%;
  top: calc(100% - 2px);
}
.crm-tab.checked > .crm-tab__icon,
.crm-tab.checked > .tab-content {
  color:  #4262f0;
}
.crm-tab__icon {
  margin-right: 8px;
}
.tab-content {
  white-space: nowrap;
}

</style>