<template>
  <div class="function set-height">
    <div class="function__left">
      <h1 class="function__title mgr-8">Thêm Tiềm Năng</h1>
      <div style="font-family: Roboto; font-size: 16px">Mẫu tiêu chuẩn</div>
      <div class="function__edit">Sửa bố cục</div>
    </div>
    <div class="layout__center"></div>
    <div class="function__right">
      <router-link class="link-router" to="/">
        <BaseButton
          class="mgr-8"
          :hasContent="true"
          buttonContent="Hủy bỏ"
          color="#000"
          backgroundColor="#fff"
          backgroundColorHover="#f0f2f4"
          borderColor="#d3d7de"
          :hasOutLined="true"
        />
      </router-link>
      <BaseButton
        class="mgr-8"
        :hasContent="true"
        buttonContent="Lưu và thêm"
        color="#4262F0"
        :hasOutLined="true"
        backgroundColor="#fff"
        borderColor="#4262F0"
        backgroundColorHover="#f0f2f4"
      />
      <BaseButton
        class="mgr-8"
        :hasContent="true"
        buttonContent="Lưu"
        color="#fff"
        backgroundColor="#4262F0"
        :hasOutLined="false"
      />
    </div>
  </div>
  <div class="potential-content">
    <div class="image-potential">
      <div class="image__title">
        Ảnh tiềm năng
      </div>
      <div class="image__content">
        ảnh
      </div>
    </div>
  </div>

</template>

<script>
import BaseButton from "../base/BaseButton.vue";
export default {
  name: "TheFunction",
  components: {
    BaseButton,
  },
};
</script>

<style scoped>
.set-height {
  height: 62px;
}

.function {
  width: 100%;
}

.function__left {
  display: flex;
  align-items: center;
}

.function__title {
  margin-left: 16px;
  font-size: 20px;
  font-weight: 500;
  font-family: Roboto;
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

.potential-content {
  padding: 32px 0 0;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.image-potential {
  margin: 0 0 16px 56px;
}

.image__title {
  
  margin-bottom: 16px;
}

.image__content {
  width: 48px;
  height: 48px;
}
</style>