<template>
  <TheFunction />
  <div class="wrapper">
    <TheSidebarLeft />
    <TheContent />
    <TheSidebarRight />
  </div>
</template>

<script>
import TheFunction from "../layout/TheFunction.vue";
import TheSidebarLeft from "../layout/TheSidebarLeft.vue";
import TheContent from "../layout/TheContent.vue";
import TheSidebarRight from "../layout/TheSidebarRight.vue";
export default {
  name: "PotentialPage",
  components: {
    TheFunction,
    TheSidebarLeft,
    TheContent,
    TheSidebarRight,
  },
};
</script>

<style>
.wrapper {
  display: flex;
  height: calc(100vh - 140px);
}
.function {
  display: flex;
  background-color: #e2e4e9;
  grid-column-start: 1;
  grid-column-end: 5;
  align-items: center;
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
}

.link-router {
  text-decoration: none;
}
</style>