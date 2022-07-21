<template>
  <div class="container">
    <Header></Header>
    <Function></Function>
    <div class="main">
      <SidebarLeft></SidebarLeft>
      <Content></Content>
      <SidebarRight></SidebarRight>
    </div>
  </div>
</template>

<script>
import Header from "./components/layout/TheHeader.vue";
import Content from "./components/layout/TheContent.vue";
import Function from "./components/layout/TheFunction.vue";
import SidebarLeft from "./components/layout/TheSidebarLeft.vue";
import SidebarRight from "./components/layout/TheSidebarRight.vue";
export default {
  name: "App",
  components: {
    Header,
    Content,
    Function,
    SidebarLeft,
    SidebarRight,
  },
};
</script>

<style>
@import url("./css/main.css");
</style>
