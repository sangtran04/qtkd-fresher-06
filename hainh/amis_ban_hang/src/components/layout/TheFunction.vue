<template>
  <div class="function">
    <div class="function__left">
      <div class="function-title">
        <p>{{ title }}</p>
        <div class="icon-down"></div>
      </div>
      <div class="function-fix">
        <p>Sửa</p>
        <div class="show-tooltip icon-refresh-wrap">
          <div class="icon-refresh"></div>
          <TooltipComp contentTooltip="Nạp dữ liệu" />
        </div>
      </div>
    </div>
    <div class="function__right">
      <div class="show-tooltip">
        <BaseTextField
          placeholder="Tìm kiếm theo Địa chỉ, Tổ chức, ..."
          hasIconSearch
          backgroundColor="#fff"
          width="240px"
        />
        <TooltipComp
          contentTooltip="Tìm kiếm theo Địa chỉ, Tổ chức, Email cá nhân, Họ và tên, ĐT di động, ĐT cơ quan, Email cơ quan, mã số thuế"
        />
      </div>
      <div style="margin: 0 8px 0 10px">
        <BaseButton buttonContent="Thêm" hasIcon pathLink="/formAdd" />
      </div>
      <div class="show-menu">
        <button class="button-more"></button>
      </div>
      <div>
        <button class="switch-view-type">
          <div class="icon-dropdown"></div>
          <div class="arrow_drop_down_16 btn-drop"></div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '../base/BaseButton.vue'
import BaseTextField from '../base/BaseTextField.vue'
import TooltipComp from '../base/TooltipComp.vue'
export default {
  name: 'TheFunction',
  components: {
    BaseButton,
    BaseTextField,
    TooltipComp,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.icon-refresh-wrap {
  padding: 8px;
  cursor: pointer;
  margin-left: 12px;
}
.icon-refresh-wrap:hover {
  border-radius: 50%;
  background-color: #c5c9d3;
}
.arrow_drop_down_16 {
  display: inline-block;
  width: 16px;
  height: 16px;
  background: transparent
    url(https://crmplatform.misacdn.net/app/assets/Images/icon/icon_collection.svg)
    no-repeat -48px -32px;
  cursor: pointer;
}
.icon-dropdown {
  text-transform: none !important;
  font-weight: 500 !important;
  /* border: 1px solid #d3d7de!important; */
  /* min-width: 64px; */
  /* height: 32px; */
  line-height: 20px !important;
  /* padding: 5px 8px; */
  /* border-radius: 4px; */
  -moz-background-clip: padding;
  /* -webkit-background-clip: padding-box; */
  /* background-clip: padding-box; */
  /* border: 1px solid #e2e4e9; */
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  /* box-sizing: border-box; */
  /* background-color: #fff; */
  color: #1f2229;
  /* font-size: 13px; */
  /* line-height: 13px; */
  /* font-family: Roboto,Arial,Helvetica,sans-serif; */
  /* font-weight: 400; */
  font-feature-settings: normal;
  font-variant: normal;
  /* cursor: pointer; */
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  /* transition: all .3s ease-in-out; */
  -moz-transition: all 0.3s ease-in-out;
  /* -webkit-transition: all .3s ease-in-out; */
  /* position: relative; */
  -ms-box-sizing: border;
  -o-box-sizing: border;
  box-sizing: border;
}

.icon-dropdown::after {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  background: transparent
    url(https://crmplatform.misacdn.net/app/assets/Images/icon/icon_collection.svg)
    no-repeat -128px -304px;
}
.switch-view-type {
  display: flex;
  text-transform: none !important;
  font-weight: 500 !important;
  border: 1px solid #d3d7de !important;
  height: 32px;
  width: 55px;
  line-height: 20px !important;
  padding: 7px;
  border-radius: 4px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border: 1px solid #e2e4e9;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #fff;
  color: #1f2229;
  font-size: 13px;
  line-height: 13px;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-feature-settings: normal;
  font-variant: normal;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  position: relative;
}
.switch-view-type:hover {
  background-color: #f0f2f4;
}

.show-menu {
  margin-right: 8px;
}
.button-more {
  width: 36px;
  text-transform: none !important;
  font-weight: 500 !important;
  border: 1px solid #d3d7de !important;
  min-width: 34px;
  height: 32px;
  border-radius: 4px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border: 1px solid #e2e4e9;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #fff;
  color: #1f2229;
  font-size: 13px;
  line-height: 13px;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-feature-settings: normal;
  font-variant: normal;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  position: relative;
  -ms-box-sizing: border;
  -o-box-sizing: border;
  box-sizing: border;
}

.button-more:hover {
  background-color: #f0f2f4;
}

.button-more::before {
  content: '';
  width: 16px;
  height: 16px;
  display: inline-block;
  background: transparent url('../../assets/Resource/img/icon_collection.svg')
    no-repeat -48px 0;
}
.function__right {
  display: flex;
}
.function {
  min-height: 56px;
  width: 100%;
  background-color: rgb(226, 228, 233);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-bottom: 1px solid rgb(214, 218, 224);
}
.function__left {
  display: flex;
}
.function-title {
  display: flex;
  align-items: center;
  margin-right: 18px;
}
.function-title > p {
  font-size: 20px;
  font-family: bold;
  cursor: pointer;
}
.icon-down {
  margin-left: 4px;
  cursor: pointer;
}

.function-fix {
  display: flex;
  align-items: center;
  margin-top: 2px;
}

.function-fix > p {
  color: rgb(64, 94, 236);
}
.function-fix > p:hover {
  text-decoration: underline;
  cursor: pointer;
}
.icon-refresh {
}

.link {
  text-decoration: none;
}
</style>
