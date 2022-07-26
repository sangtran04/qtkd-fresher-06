<template>
  <div class="function">
    <div class="function__left">
      <h1 class="function__title mgr-8">Tiềm năng của tôi</h1>
      <div class="icon icon-dropdown"></div>
      <div class="function__edit">Sửa</div>
      <div class="icon-refresh"></div>
    </div>
    <div class="layout__center"></div>
    <div class="function__right">
        <BaseTextField
          class="mgr-8"
          placeholder="Tìm kiếm theo Địa chỉ, Tổ chức, Email cá nhân, Họ và tên, ĐT di động, ĐT cơ quan, Email cơ quan, Mã số thuế"
          :isIconSearch="true"
          width="240px"
          backgroundColor="#fff"
        />
        <router-link to="/AddPage" class="link-router">
          <BaseButton class="mgr-8" buttonContent="Thêm" backgroundColor="#4262F0" color="#fff" :hasIcon="true" :hasDown="true"/>
        </router-link>
        <BaseButton class="mgr-8" backgroundColor="#fff" backgroundColorHover="#f0f2f4" :hasContent="false" width="36px">
            <div class="icon-future"></div>
        </BaseButton>
        <BaseButton class="mgr-8" backgroundColor="#fff" backgroundColorHover="#f0f2f4" :hasContent="false">
            <div class="icon-threecol mgr-8"></div>
            <div class="icon-dropdown"></div>
        </BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from "../base/BaseButton.vue"
import BaseTextField from "../base/BaseTextField.vue"
export default {
    name: 'TheFunction',
    components: {
    BaseButton,BaseTextField,
    }
}
</script>

<style>
.function {
  display: flex;
  background-color: #e2e4e9;
  grid-column-start: 1;
  grid-column-end: 5;
  align-items: center;
  border-bottom: 1px solid #d3d7de;
  z-index: 1;
}

.function__left {
  display: flex;
  align-items: center;
}

.function__title {
  margin-left: 16px;
  font-size: 20px;
  font-weight: 500;
  font-family: Regular;
  line-height: 1.428571429;
  color: #1f2229;
}

.function__edit {
  margin-left: 16px;
  color: #5973eb;
  font-size: 13px;
}

.layout__center {
  flex: 1;
}

.function__right {
    display: flex;
    margin-right: 8px;
}

.link-router {
  text-decoration: none;
}

</style>