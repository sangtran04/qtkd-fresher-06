<template>
  <div class="function">
    <div class="function__left">
      <div class="menu__name">Tiềm năng của tôi</div>
      <div class="icon icon--down"></div>
      <a href="" class="function__fix">Sửa</a>
      <div class="function__refresh ml-8">
        <div class="icon icon--refresh"></div>
      </div>
    </div>
    <div class="function__right">
      <div class="function__search mr-8">
        <BaseTextField
          placeholder="Tìm kiếm theo Địa chỉ, Tổ chức, Email cá nhân, Họ và tên, ĐT di động, ĐT cơ quan, Email cơ quan, Mã số thuế"
          :hasIconSearch="true"
        />
      </div>
      <router-link to="/AddPage">
        <BaseButton buttonText="Thêm" :hasDropdown="true" :hasIcon="true" />
      </router-link>
      <router-link to="/">
        <div class="function__btn">
          <div class="icon icon--more"></div>
        </div>
      </router-link>
      <div class="function__btn-dropdown">
        <div class="icon icon--dropdown"></div>
        <div class="icon icon--down"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "./../base/BaseButton.vue";
import BaseTextField from "./../base/BaseTextField.vue";

export default {
  components: {
    BaseButton,
    BaseTextField,
  },
};
</script>

<style>
</style>