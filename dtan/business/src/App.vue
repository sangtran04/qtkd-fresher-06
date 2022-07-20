<template>
  <Menu />
  <Function />
  <Content />
  <ToastMessage style="margin-left: 100px" content="Thành công" type ="success"/>
</template>


<script>
import Menu from "./components/layout/TheMenu.vue";
import Function from "./components/layout/TheFunction.vue";
import Content from "./components/layout/TheContent.vue";
import ToastMessage from "./components/base/BaseToast.vue";

export default {
  name: "App",
  components: {
    Menu,
    Function,
    Content,
    ToastMessage,
  },
};
</script>

<style>
@import url(./css/main.css);
</style>
