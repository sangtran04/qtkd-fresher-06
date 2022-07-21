<template>
  <div class="sidebar__left">
    <div class="fillter-save">
      BỘ LỌC ĐÃ LƯU
      <div class="icon icon--up"></div>
    </div>
    <div class="fillter-by">
      LỌC TIỀM NĂNG THEO
      <div class="icon icon--search"></div>
    </div>
    <div class="fillter-select">
      <div class="fillter-select__item">
        <input type="checkbox" id="label-check" /><label for="label-check"
          >Thẻ</label
        >
      </div>
      <div class="fillter-select__item"><input type="checkbox" />Xưng hô</div>
      <div class="fillter-select__item"><input type="checkbox" />Họ và tên</div>
      <div class="fillter-select__item"><input type="checkbox" />Chức danh</div>
      <div class="fillter-select__item">
        <input type="checkbox" />ĐT di động
      </div>
      <div class="fillter-select__item">
        <input type="checkbox" />ĐT cơ quan
      </div>
      <div class="fillter-select__item">
        <input type="checkbox" />Email cơ quan
      </div>
      <div class="fillter-select__item">
        <input type="checkbox" />Email cá nhân
      </div>
      <BaseCheckbox />sfsfs
      <BaseButton />
      <BaseTag/>
      <base-toast-message></base-toast-message>
    </div>
  </div>
</template>

<script>
import BaseCheckbox from "./../base/BaseCheckbox.vue";
import BaseButton from "./../base/BaseButton.vue";
import BaseTag from './../base/BaseTag.vue'
import BaseToastMessage from './../base/BaseToastMessage.vue'
export default {
  components: {
    BaseCheckbox,
    BaseButton,
    BaseTag,
    BaseToastMessage,
  },
  data() {},
};
</script>

<style>
@import url("./../../css/main.css");
</style>