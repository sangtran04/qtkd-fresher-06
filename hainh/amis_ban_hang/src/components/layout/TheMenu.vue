<template>
  <div class="menu">
    <div class="m-top">
      <div class="m-top__logo">
        <div class="m-top__icon-menu"></div>
        <div class="m-top__icon-logo"></div>
        <p>Bán hàng</p>
      </div>
      <BaseTextField
        placeholder="Tìm kiếm tiềm năng, liên hệ, khách hàng"
        :hasIconSearch="true"
      />

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
    <div class="m-bottom"></div>
  </div>
</template>

<script>
import BaseTextField from '../base/BaseTextField.vue'

export default {
  components: {
    BaseTextField,
  },
  data() {},
}
</script>

<style scoped>
.margin-right-20 {
  margin-right: 2rem;
}

.menu {
  grid-column: 1 / 4;
  grid-row: 1;
  border: 1px solid red;
}

.m-top {
  display: flex;
  align-items: center;
  height: 5rem;
  justify-content: space-between;
  padding-left: 1rem;
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
  background: url('../../assets/Resource/img/Logo_Ban_hang.svg') no-repeat;
  width: 30px;
  height: 30px;
  margin-left: 2rem;
  margin-right: 1rem;
}
</style>
