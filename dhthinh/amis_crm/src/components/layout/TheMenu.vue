<template>
  <div class="header">
    <div class="header__sidebar">
      <div class="sidebar__left">
        <div class="icon-toggle"></div>
        <div class="logo-amis"></div>
      </div>
      <div class="sidebar__center">
        <div class="input--search">
          <BaseTextField
            class="input-center"
            placeholder="Tìm kiếm tiềm năng, liên hệ, khách hàng"
            :isIconSearch="true"
            width="320px"
          />
        </div>
      </div>
      <div class="sidebar__right">
        <div class="boder-icon">
            <div class="icon icon-avatar show-tooltip">
              <BaseTooltip contentTooltip="Đặng Hữu Thịnh"/>
            </div>
        </div>
        <div class="boder-icon">
          <div class="icon icon-help show-tooltip">
              <BaseTooltip contentTooltip="Hỏi đáp"/>
          </div>
        </div>
        <div class="boder-icon">
          <div class="icon icon-noti show-tooltip">
            <BaseTooltip contentTooltip="Thông báo"/>
          </div>
        </div>
        <div class="boder-icon">
          <div class="icon icon-setting show-tooltip">
            <BaseTooltip contentTooltip="Cài đặt chung"/>
          </div>
        </div>
        <div class="boder-icon">
          <div class="icon icon-calender show-tooltip">
            <BaseTooltip contentTooltip="Lịch làm việc"/>
          </div>
        </div>
        <div class="boder-icon">
          <div class="icon icon-box show-tooltip">
            <BaseTooltip contentTooltip="Tra cứu tồn kho"/>
          </div>
        </div>
        <div class="boder-icon">
          <div class="icon icon-facebook24 show-tooltip">
            <BaseTooltip contentTooltip="Cộng đồng hỗ trợ CRM"/>
          </div>
        </div>
      </div>
    </div>

    <div class="menu">
      <BaseTags
        v-for="tab in tabs"
        :key="tab.id"
        :tagContent="tab.contentTab"
        :checked="tab.checked"
      >
        <div :class="tab.iconTab"></div>
      </BaseTags>
    </div>
  </div>
</template>

<script>
import BaseTags from "../base/BaseTags.vue";
import { ref } from "vue";
import ListTag from "../../constants/ListTab";
import BaseTextField from "../base/BaseTextField.vue";
import BaseTooltip from "../base/BaseTooltip.vue";
export default {
  name: "TheMenu",
  components: {
    BaseTextField,
    BaseTags,
    BaseTooltip,
},

  setup() {
    const tabs = ref(ListTag);
    return {
      tabs,
    };
  },
};
</script>

<style>
.header {
  display: flex;
  background-color: #fff;
  flex-direction: column;
  height: 84px;
  width: 100%;
  flex-shrink: 0;
  overflow: hidden;
  box-shadow: 0 2px 4px #1f222929;
  z-index: 3;
}
.logo-amis {
  background-image: url("../../assets/Resource/img/Logo_Ban_hang.svg");
  background-repeat: no-repeat;
  height: 32px;
  width: 100%;
  margin-left: 20px;
}
.header__sidebar {
  display: flex;
  align-items: center;
  margin-top: 10px;
  height: 32px;
}

.sidebar__left {
  display: flex;
  align-items: center;
  width: 240px;
  margin-left: 10px;
}

.sidebar__center {
  flex: 1;
  display: flex;
  text-align: center;
  justify-content: center;
}

.input--search {
  width: 320px;
}

.sidebar__right {
  display: flex;
  width: 320px;
  align-items: center;
  flex-direction: row-reverse;
  padding-right: 16px;
}

.menu {
  display: flex;
  height: 40px;
  align-items: center;
  margin-top: 2px;
}

.menu__item {
  cursor: pointer;
  display: flex;
  margin-left: 16px;
  height: 40px;
  align-items: center;
}

.context {
  color: #1f2229;
  margin-left: 4px;
  font-size: 13px;
}

.boder-icon {
  position: relative;
  cursor: pointer;
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.boder-icon:hover {
  background-color: #f0f2f4;
}
</style>