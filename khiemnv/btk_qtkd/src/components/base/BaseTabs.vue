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
//@click="currentTab = index" :class="{active: currentTab === index}">
};
</script>

<style>

.crm-tab {
  display: flex;
  font-weight: 500;
  align-items: center;
  color: #1f2229;
  cursor: pointer;
  height: 40px;

  position: relative;
  justify-content:center ;
  align-content: center;

}
.crm-tab:hover {
  background-color: #F0F2F4;
  border-radius: 4px;
  
}
.crm-tab.checked  span {
  position: absolute;
  background-color:  #4262f0;
  display: block;
  height: 1px;
  width: 85.61px;
  border-bottom: 2px solid #4262f0;
 top:  40px;
}
.crm-tab.checked > .crm-tab__icon,
.crm-tab.checked > .tab-content {
  color:  #4262f0;
}

.tab-content {
  white-space: nowrap;
  margin-left: 8px;
} 

</style>