<template>
  <div class="function">
    <div class="function__left">
      <div class="menu__name">Tất cả tiềm năng</div>
      <div class="icon icon--down ml-8 mr-16"></div>
      <a href="" class="function__fix">Sửa</a>
      <div class="icon icon--refresh"></div>
    </div>
    <div class="function__right">
      <BaseButton buttonText="Thêm mới" :hasDropdown="true" :hasIcon="true" />
      <div class="function__btn">
        <div class="icon icon--more"></div>
      </div>
      <div class="function__btn">
        <div class="icon icon--dropdown ml-8"></div>
        <div class="icon icon--down mr-8"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "./../base/BaseButton.vue";

export default {
  components: {
    BaseButton,
  }
};
</script>

<style>
</style>