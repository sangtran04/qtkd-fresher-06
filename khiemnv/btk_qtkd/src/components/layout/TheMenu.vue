<template>
  <!-- Lớp header trên cùng của amis, chia làm trái, giữa, phải -->
  <div class="menu">
    <div class="menu__up">
      <div class="menu__left">
        <div class="header">
          <div class="menu__left--btn icon-16"></div>

          <div class="menu__left--icon icon-logo"></div>
          <div class="menu__left--text">CRM</div>
        </div>
      </div>

      <div class="menu__center">
        <BaseTextField hasIcon typeInput="search"></BaseTextField>
      </div>
      <div class="menu__right">
        <div class="menu__right--icon">
          <div class="boder-icon"><div class="menu-icon icon-book"></div></div>

          <div class="boder-icon">
            <div class="menu-icon icon-facebook"></div>
          </div>

          <div class="boder-icon"><div class="menu-icon icon-stock"></div></div>

          <div class="boder-icon">
            <div class="menu-icon icon-calendar"></div>
          </div>

          <div class="boder-icon">
            <div class="menu-icon icon-notification"></div>
          </div>

          <div class="boder-icon">
            <div class="menu-icon icon-setting"></div>
          </div>

          <div class="boder-icon"><div class="menu-icon icon-help"></div></div>

          <div class="boder-icon">
            <div class="menu-icon icon-avatar"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="menu__down">
      <BaseTabs
        v-for="tab in tabs"
        :key="tab.id"
        :tabContent="tab.tabItem"
        :checked="tab.checked"
      >
        <div :class="[tab.class, tab.div]"></div>
      </BaseTabs>
    </div>
  </div>
</template>
<script>
import TAB_LIST from "@/constants/TabList";
import { ref } from "vue";
import BaseTabs from "../base/BaseTabs.vue";

import BaseTextField from "../base/BaseTextField.vue";

export default {
  components: { BaseTextField, BaseTabs },
  setup() {
    const tabs = ref(TAB_LIST);
    return {
      tabs,
    };
  },
};
</script>

<style scoped>
@import url("../../assets/icon.css");
* {
  box-sizing: border-box;
}
.menu {
  grid-column: 1 / 4;
  height: 32px;
  box-shadow: 0 2px 4px rgba(31, 34, 41, 0.16);
  z-index: 999;
  width: 100%;
  max-height: 40px;
  position: relative;
  border-right: 1px solid rgb(222, 225, 230);
}

.menu__up {
  display: flex;
  font-weight: unset;
  justify-content: space-between;
  margin: 10px 0px 1px;
  height: 32px;
  background-color: #fff;
}
.menu__down {
  display: flex;
  height: 40px;
  flex-grow: 1;
  align-items: center;
  color: #1f2229;
}

.menu .menu__up .menu__left {
  display: flex;
  align-items: center;
  width: 190px;
  flex: 1;
}
.menu .menu__center {
  text-align: center;
  flex: 1;
}
.menu .menu__right {
  flex: 1;

}
.menu__right--icon {
  display: flex;
  align-items: center;
right: 16px;
    flex-grow: 1;
  top: 12%;
  position: absolute;

}
.menu-icon {

position: absolute;
margin-top: -1%;
}
.boder-icon{
 position: relative;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.boder-icon:hover {
  background-color: #f0f2f4;
  border-radius: 50%;
    width: 40px;
  height: 40px;
  transition: all 0.3s ease-in-out;

}

.crm-tab {
  padding: 0 16px;
}

.tab-content {
  margin-left: 80px;
}

.header {
  display: flex;
  align-items: center;
}
.header .menu__left--btn icon-16 {
  align-items: center;
}
.header .menu__left--btn icon-logo {
  align-items: center;
  margin-left: 10px;
}
.menu__left--text {
  font-weight: 750;
  font-size: 20px;
}
</style>
