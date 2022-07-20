<template>
  <div class="menu">
    <div class="m-top">
      <div class="m-top__logo">
        <div class="m-top__icon-menu"></div>
        <div class="m-top__icon-logo"></div>
      </div>
      <div class="margin-left-16">
        <BaseTextField
          placeholder="Tìm kiếm tiềm năng, liên hệ, khách hàng"
          :hasIconSearch="true"
        />
      </div>

      <div class="m-top__icons">
        <div class="icon-facebook margin-right-20"></div>
        <div class="icon-notification margin-right-20"></div>
        <div class="icon-setting margin-right-20"></div>
        <div class="icon-3d margin-right-20"></div>
        <div class="icon-calender margin-right-20"></div>
        <div class="icon-help margin-right-20"></div>
        <div class="icon-avatar margin-right-20"></div>
      </div>
    </div>
    <div class="m-bottom">
      <div class="m-tabs">
        <BaseTab
          v-for="tab in tabs"
          :key="tab.id"
          :tabContent="tab.contentTab"
          :checked="tab.checked"
          @click="handleClickTab(tab.id)"
        >
          <div
            class="icon-dashboard m-tab__icon"
            :class="{ checked: tab.checked }"
          ></div>
        </BaseTab>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTextField from '../base/BaseTextField.vue'
import BaseTab from '../base/BaseTab.vue'
import TAB_LIST from '../../constants/tab-list'
export default {
  components: {
    BaseTextField,
    BaseTab,
  },

  data() {
    const tabs = TAB_LIST
    return {
      tabs,
    }
  },
  methods: {
    handleClickTab(tabId) {
      for (let i = 0; i < this.tabs.length; i++) {
        this.tabs[i].checked = tabId === this.tabs[i].id
      }
    },
  },
}
</script>

<style scoped>
.m-tabs {
  display: flex;
}
.margin-right-20 {
  margin-right: 2rem;
}

.menu {
  grid-column: 1 / 4;
  grid-row: 1;
  padding-left: 16px;
  box-shadow: 0 2px 4px rgba(31, 34, 41, 0.16);
  z-index: 1;
  border-right: 1px solid rgb(222, 225, 230);
}

.m-top {
  display: flex;
  align-items: flex-end;
  height: 4.4rem;
  justify-content: space-between;
}

.m-top__logo {
  display: flex;
  align-items: center;
}

.m-top__icons {
  display: flex;
  align-items: center;
}

.m-top__icon-menu {
  background: url('../../assets/Resource/img/icon_collection.svg') no-repeat -4px -341px;
  width: 16px;
  height: 16px;
}

.m-top__icon-logo {
  background: url('../../assets/Resource/img/Logo_CRM_App.svg') no-repeat;
  width: 150px;
  height: 30px;
  margin-left: 2rem;
  margin-right: 1rem;
}

.margin-left-16 {
  margin-left: 16px;
}
</style>
