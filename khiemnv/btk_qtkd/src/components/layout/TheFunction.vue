<template>
  <div class="function">
    <div class="function__left">
      <div class="function__left--title">Tất cả tiềm năng</div>
      <div class="function__left--icon icon-down"></div>
      <div class="function__left--edit">Sửa</div>
      <div class="function__left--icon icon-refresh"></div>
    </div>
    <div class="function__right">
      <div class="button__group">
        <BaseButton :buttonContent="btn" hasIcon display="block"></BaseButton>
        <BaseButton :notIcon="true" width="16px" backgroundColor="white"></BaseButton>
        <BaseButton :notIcon="false" width="16px" backgroundColor="white"></BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../base/BaseButton.vue";
export default {
  name: "TheFunction",
  components: { BaseButton },
  data() {
    return {
      btn: "Thêm",
      hasIcon: true,
    };
  },
};
</script>

<style>
.function {
  display: flex;
  background-color: #e2e4e9;
  grid-column: 1/4;
  grid-row: 2;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid rgb(214, 218, 224);
}
.function__left {
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: space-between;
}
.function__left--title {
  margin-left: 16px;
  font-weight: bold;
  font-size: 20px;
}
.function__left--edit {
  margin-left: 16px;
  color: #5973eb;
  font-size: 13px;
}
.button__group {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 6px;
}
</style>
