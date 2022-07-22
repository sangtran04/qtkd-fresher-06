<template>
  <!-- Lớp header trên cùng của amis, chia làm trái, giữa, phải -->
  <div class="menu">
    <div class="menu__up">
      <div class="menu__left">
        <div class="header">
          <div class="menu__left--btn icon-16"></div>
          <div class="menu__left--icon icon-logo"></div>
        </div>
      </div>

      <div class="menu__center">
        <BaseTextField hasIcon></BaseTextField>
      </div>
      <div class="menu__right">
        <div class="menu__right--icon">
          <div class="menu-icon icon-facebook"></div>
          <div class="menu-icon icon-box"></div>
          <div class="menu-icon icon-calendar"></div>
          <div class="menu-icon icon-notification"></div>
          <div class="menu-icon icon-setting"></div>
          <div class="menu-icon icon-help"></div>
          <div class="menu-icon icon-avatar"></div>
        </div>
      </div>
    </div>
    <div class="menu__down">
      <BaseTabs v-for="tab in tabs" :key="tab.id" :tabContent="tab.tabItem">
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

<style>
@import url("../../assets/icon.css");
.menu {
  display: flex;
  flex-direction: column;
  grid-column: 1/4;
  z-index: 999;
}

.menu__up {
  display: flex;
  justify-content: space-between;
  height: 84px;
  background-color: #fff;
  box-shadow: 0 2px 4px #1f222929;
}
.menu__down {
  display: flex;
  width: 100%;
  height: 50%;
  align-items: center;
  margin-right: 150px;
}

.menu .menu__up .menu__left {
  display: flex;
  padding-right: 16px;
  align-items: center;
  width: 240px;
}
.menu .menu__up .menu__right .menu__right--icon {
  display: flex;
  padding-top: 8px;
  width: 320px;
  justify-content: flex-end;
}
.menu .menu__up .menu__right .menu__right--icon div {
  margin-right: 16px;
}
.menu .menu__up .menu__left {
  display: flex;
  width: 240px;
}

.icon-format {
  margin-right: 5px;
}
.tab-content {
  font-size: 16px;
}
.menu .menu__center {
  flex: 1;
  text-align: center;
  margin-top: 0;
}
</style>
