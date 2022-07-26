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
       <div class="header__center mr-8">
        <div class="header__search">
          <div class="header__search-input">
            <input
              type="text"
              placeholder="Tìm kiếm tiềm năng, liên hệ, khách hàng"
              class="text-field"
            />
          </div>
          <div class="icon icon--search"></div>
          <div class="icon-close-16px"></div>
        </div>
      </div>
      <BaseButton buttonText="Thêm" :hasDropdown="true" :hasIcon="true" />
      <div class="function__btn">
        <div class="icon icon--more"></div>
      </div>
      <div class="function__btn-dropdown">
        <div class="icon icon--dropdown"></div>
        <div class="icon icon--down"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "./../base/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
};
</script>

<style>
</style>