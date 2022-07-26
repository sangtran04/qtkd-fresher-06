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
          backgroundColorWhenHover="#e2e4e9"
          width="320px"
        />
      </div>

      <div class="m-top__icons">
        <div class="icon-blog show-tooltip">
          <TooltipComp contentTooltip="Tri thức" />
        </div>
        <div class="icon-menu-wrap">
          <div class="icon-facebook show-tooltip">
            <TooltipComp contentTooltip="Cộng đồng hỗ trợ AMIS CRM" />
          </div>
        </div>
        <div class="icon-menu-wrap">
          <div class="icon-3d show-tooltip">
            <TooltipComp contentTooltip="Tra cứu tồn kho" />
          </div>
        </div>
        <div class="icon-menu-wrap">
          <div class="icon-calender show-tooltip">
            <TooltipComp contentTooltip="Lịch làm việc" />
          </div>
        </div>
        <div class="icon-menu-wrap">
          <div class="icon-notification show-tooltip">
            <TooltipComp contentTooltip="Thông báo" />
          </div>
        </div>
        <div class="icon-menu-wrap">
          <div class="icon-setting show-tooltip">
            <TooltipComp contentTooltip="Thiết lập" />
          </div>
        </div>
        <div class="icon-menu-wrap">
          <div class="icon-help show-tooltip">
            <TooltipComp contentTooltip="Hướng dẫn" />
          </div>
        </div>
        <div class="icon-menu-wrap margin-right-16">
          <div class="icon-avatar show-tooltip">
            <TooltipComp contentTooltip="Nguyễn Hoàng Hải" left="-100%" />
          </div>
        </div>
      </div>
    </div>
    <div class="m-bottom">
      <ul class="m-tabs">
        <BaseTab
          v-for="tab in tabs"
          :key="tab.id"
          :tabContent="tab.contentTab"
          :checked="tab.checked"
          @click="handleClickTab(tab.id)"
        >
          <div
            :class="{ checked: tab.checked, [tab.className]: tab.className }"
          ></div>
        </BaseTab>
      </ul>
    </div>
  </div>
</template>

<script>
import BaseTextField from '../base/BaseTextField.vue'
import BaseTab from '../base/BaseTab.vue'
import TAB_LIST from '../../constants/tab-list'
import TooltipComp from '../base/TooltipComp.vue'
export default {
  components: {
    BaseTextField,
    BaseTab,
    TooltipComp,
  },

  data() {
    const tabs = TAB_LIST
    return {
      tabs,
    }
  },
  methods: {
    // Đặt sự kiện click cho các tab
    handleClickTab(tabId) {
      for (let i = 0; i < this.tabs.length; i++) {
        this.tabs[i].checked = tabId === this.tabs[i].id
      }
    },
  },
}
</script>

<style scoped>
.margin-right-16 {
  margin-right: 16px;
}
.icon-menu-wrap {
  cursor: pointer;
  width: 40px !important;
  height: 40px !important;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
}
.icon-menu-wrap:hover {
  background-color: #f0f2f4;
}
.icon-blog {
  display: inline-block;
  cursor: pointer;
  width: 40px !important;
  height: 40px !important;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
}
.icon-blog:hover {
  background-color: #f0f2f4;
}
.icon-blog::before {
  content: '';
  display: inline-block;
  width: 24px;
  height: 24px;
  background: transparent
    url(https://crmplatform.misacdn.net/app/assets/Images/icon/icon_collection.svg)
    no-repeat -96px -433px;
}
.m-top__icon-logo {
  cursor: pointer;
}
.m-top__icon-menu {
  cursor: pointer;
}
.m-tabs {
  display: flex;
  margin-left: -16px;
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
  position: sticky;
  top: 0;
  position: -webkit-sticky;
  background-color: #fff;
}

.m-top {
  display: flex;
  height: 3.2rem;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 3px;
}

.m-top__logo {
  display: flex;
  align-items: center;
}

.m-top__icons {
  display: flex;
  align-items: center;
}
.m-top__icons div {
  cursor: pointer;
}
.m-top__icon-menu {
  background: url('../../assets/Resource/img/icon_collection.svg') no-repeat -4px -341px;
  width: 16px;
  height: 16px;
}

.m-top__icon-logo {
  background: url('../../assets/Resource/img/Logo_CRM_App.svg') no-repeat;
  width: 150px;
  height: 32px;
  margin-left: 2rem;
  margin-right: 1rem;
}

.margin-left-16 {
  margin-left: 16px;
}
</style>
