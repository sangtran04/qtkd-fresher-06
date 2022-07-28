<template>
  <SidebarLeft></SidebarLeft>
  <Content></Content>
  <SidebarRight></SidebarRight>
</template>

<script>
import Content from "./../layout/TheContent.vue";
import SidebarLeft from "./../layout/TheSidebarLeft.vue";
import SidebarRight from "./../layout/TheSidebarRight.vue";
export default {
  name: "PotentialPage",
  components: {
    Content,
    SidebarLeft,
    SidebarRight,
  },
};
</script>

<style scoped>
</style>