<template>
  <div class="container">
    <TheMenu />
    <TheFunction />
    <TheSidebarLeft />
    <TheContent />
    <TheSidebarRight />
    <BaseToastMessage
      toastContent="Đăng nhập thành công"
      backgroundColor="#31B491"
      :isShow="true"
    >
      <div class="icon-accept"></div>
    </BaseToastMessage>
    <BasePopup :hasShowPopup="false" popupContent="Lỗi rồi"/>
  </div>
</template>

<script>
import TheMenu from "./components/layout/TheMenu.vue";
import TheFunction from "./components/layout/TheFunction.vue";
import TheSidebarLeft from "./components/layout/TheSidebarLeft.vue";
import TheContent from "./components/layout/TheContent.vue";
import TheSidebarRight from "./components/layout/TheSidebarRight.vue";
import BaseToastMessage from "./components/base/BaseToastMessage.vue";
import BasePopup from "./components/base/BasePopup.vue"

export default {
  name: "App",
  components: {
    TheMenu,
    TheFunction,
    TheSidebarLeft,
    TheContent,
    TheSidebarRight,
    BaseToastMessage,
    BasePopup,
  },
};
</script>

<style>
@import url("./style/font.css");
@import url("./style/icons.css");
@import url("./style/button.css");
.container {
  display: grid;
  grid-template-columns: 249px calc(100% - 569px) 320px;
  grid-template-rows: 84px 56px calc(100vh - 140px);
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: Regular;
}
.mgr-8 {
  margin-right: 8px;
}

::-webkit-scrollbar-track {
  background-color: #f1f1f1 !important;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #99a1b2 !important;
}
::-webkit-scrollbar-thumb {
  background-color: #c5c9d3 !important;
  border-radius: 4px !important;
}

::-webkit-scrollbar-thumb:active {
  background-color: #7c869c !important;
}
</style>
