<template>
  <div class="function">
    <div class="function__left">
      <div class="f-title">
        <p>Tất cả tiềm năng</p>
        <div class="icon-down"></div>
      </div>
      <div class="f-fix">
        <p>Sửa</p>
        <div class="icon-refresh"></div>
      </div>
    </div>
    <div class="function__right">
      <BaseButton buttonContent="Thêm" hasIcon />
    </div>
  </div>
</template>

<script>
import BaseButton from '../base/BaseButton.vue'
export default {
  components: {
    BaseButton,
  },
}
</script>

<style scoped>
.function {
  grid-column: 1 / 4;
  grid-row: 2;
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
.f-title {
  display: flex;
  align-items: center;
  margin-right: 18px;
}

.icon-down {
  margin-left: 8px;
}

.f-fix {
  display: flex;
  align-items: center;
}

.f-fix > p {
  color: rgb(64, 94, 236);
}

.icon-refresh {
  margin-left: 12px;
}
</style>
